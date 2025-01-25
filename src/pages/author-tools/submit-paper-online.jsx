import AuthorCard from '@/components/AuthorCard'
import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import Select from 'react-select'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const authorCountOptions = [
    { value: 1, label: '1 Author' },
    { value: 2, label: '2 Authors' },
    { value: 3, label: '3 Authors' },
    { value: 4, label: '4 Authors' },
    { value: 5, label: '5 Authors' },
];

const authorCategoryOption = [
    { label: 'Indian Author', value: 'Indian Author' },
    { label: 'International Author', value: 'International Author' },
]

const researchAreaOptions = [
    { label: 'Musculoskeletal Physical Therapy', value: 'Musculoskeletal Physical Therapy' },
    { label: 'Neurological Rehabilitation', value: 'Neurological Rehabilitation' },
    { label: 'Cardiopulmonary Physical Therapy', value: 'Cardiopulmonary Physical Therapy' },
    { label: 'Sports Rehabilitation', value: 'Sports Rehabilitation' },
    { label: 'Geriatric Physical Therapy', value: 'Geriatric Physical Therapy' },
    { label: 'Pediatric Physical Therapy', value: 'Pediatric Physical Therapy' },
    { label: "Women's Health in Physical Therapy", value: "Women's Health in Physical Therapy" },
    { label: 'Orthotics and Prosthetics', value: 'Orthotics and Prosthetics' },
    { label: 'Evidence-Based Practice and Clinical Decision Making', value: 'Evidence-Based Practice and Clinical Decision Making' },
    { label: 'Innovative Technologies in Rehabilitation', value: 'Innovative Technologies in Rehabilitation' },
    { label: 'Community-Based Rehabilitation', value: 'Community-Based Rehabilitation' },
    { label: 'Pain Management and Therapeutic Modalities', value: 'Pain Management and Therapeutic Modalities' },
    { label: 'Education and Professional Development in Physical Therapy', value: 'Education and Professional Development in Physical Therapy' },
    { label: 'Physiotherapy in Critical Care', value: 'Physiotherapy in Critical Care' },
]

const SubmitPaperOnline = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState({ type: '', data: '' });

    const { control, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
        mode: 'all',
        // defaultValues: {
        //     sPaperTitle: 'sdfsd',
        //     sEmailID: 'dhru@gmail.com',
        //     sMobileNo: '9876543210',
        //     sCity: 'Delhi',
        //     sCountry: 'India',
        //     sAuthorCount: 1,
        //     authors: [{ name: 'dfsvdf', designation: 'xcxv', mobileNumber: '9876543210' }],
        // }
    })
    const watchAuthorCount = watch('sAuthorCount');

    const { fields, append, remove } = useFieldArray({
        control,
        name: "authors"
    });

    useEffect(() => {
        if (watchAuthorCount) {
            const selectedAuthors = watchAuthorCount.value;
            const currentAuthors = fields.length;

            if (selectedAuthors > currentAuthors) {
                for (let i = currentAuthors; i < selectedAuthors; i++) {
                    append({ name: '', designation: '', mobileNumber: '', emailID: '', orcidID: '' });
                }
            } else if (selectedAuthors < currentAuthors) {
                for (let i = currentAuthors; i > selectedAuthors; i--) {
                    remove(i - 1);
                }
            }
        } else {
            // Reset authors array when no count is selected
            setValue('authors', []);
        }
    }, [watchAuthorCount, append, remove, fields.length, setValue]);

    const pdfToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Ensure the file is of type Blob
            if (file instanceof Blob) {
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result.split(',')[1]); // Remove data header
                reader.onerror = (error) => reject(error);
            } else {
                reject(new Error('Invalid file format'));
            }
        });
    };

    const onSubmit = async (data) => {
        console.log('data :>>', data)
        // setIsLoading(true)

        try {
            const paperDocFileObj = data.fPaperDocFileBase64;

            // Convert files to base64
            const paperDocFileBase64 = await pdfToBase64(paperDocFileObj);

            // Append base64 strings to the data object
            data.fPaperDocFileBase64 = paperDocFileBase64;

            // Remove the original file objects if not needed (optional)
            delete data.fPaperDocFile;

            const serializeAuthors = (authors) => {
                return authors.map((author, index) => {
                    return `Author ${index + 1}: Name: ${author.name}, Designation: ${author.designation}, Mobile: ${author.mobileNumber}, Email ID: ${author?.emailID}, Orcid ID: ${author?.orcidID}`;
                }).join(' | ');
            };

            // Prepare form data for submission
            const formDataForSheet = {
                "Paper Title": articleData.sPaperTitle,
                "Research Area": articleData?.eResearchArea?.value,
                "Country": articleData.sCountry,
                "Keywords": articleData?.sKeywords,
                "Author Category": articleData.eCategory?.value,
                "Author Counts": articleData.sAuthorCount?.value,
                Authors: serializeAuthors(articleData.authors || []),
                "Paper Doc File URL": articleData?.fPaperDocFileBase64,
            };
            console.log('formDataForSheet :>>', formDataForSheet)

            // Post to backend
            const driveResponse = await fetch('/api/upload-to-drive', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formDataForSheet }),
            });

            const driveData = await driveResponse.json();
            console.log('driveData ::', driveData)

            // Submit the updated form data (with Drive URLs) to Google Sheets
            const sheetResponse = await fetch('/api/submit-to-sheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(driveData.formDataForSheet),
            })

            if (!sheetResponse.ok) {
                setIsLoading(false);
                throw new Error('Failed to submit to Google Sheets');
            } else {
                setIsLoading(false);
                localStorage.removeItem('articleData')
                setMsg({ type: 'submitted', data: 'Your article has been submitted successfully.' })
            }
        } catch (err) {
            setMsg({ type: 'error', data: 'Oops! Something went wrong. Please try again.' });
            console.error(err);
        }
    };
    return (
        <section className='author-tools-section'>
            <div className='container inner-content'>
                <BreadCrumb current='Submit Paper Online - IJOPT' link='Home' title='Submit Paper Online | Indian Journal of Physical Therapy' />

                <h1 className='section-title'>Submit Paper Online</h1>
                <hr className='mt-0' />

                <div className='important-instruction'>
                    <h3 className={inter?.className}>Important Instruction</h3>
                    <p className={inter?.className}>
                        Fill in all the required details properly. The certificate will be generated based on the information you provide. Make sure your 1st Author email and mobile number are active, as notifications will be sent there.
                    </p>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)} className={`mt-3 ${inter?.className}`}>
                    <div className={`article-details`}>
                        <div className='inner-content'>
                            <h5>Article Details:</h5><hr className='mt-0' />
                            <Row className='mt-4'>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Paper Title <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="sPaperTitle"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: 'Paper Title is required' }}
                                            render={({ field }) => (
                                                <>
                                                    <Form.Control {...field} placeholder="Enter paper title" />
                                                </>
                                            )}
                                        />
                                        {errors?.sPaperTitle &&
                                            <span className='d-block text-danger text-end'>{errors?.sPaperTitle?.message}</span>
                                        }
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Research Area <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="eResearchArea"
                                            control={control}
                                            rules={{ required: 'Research Area is required' }}
                                            render={({ field }) => (
                                                <>
                                                    <Select
                                                        {...field}
                                                        options={researchAreaOptions}
                                                        placeholder="Select research area"
                                                        isClearable
                                                    />
                                                    {errors?.eResearchArea &&
                                                        <span className='d-block text-danger text-end'>{errors?.eResearchArea?.message}</span>
                                                    }
                                                </>
                                            )}
                                        />
                                    </Form.Group>
                                </Col>
                                {/* <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="sEmailID"
                                            control={control}
                                            defaultValue=""
                                            rules={{
                                                required: 'Email field is required', pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: 'Please enter a valid email address',
                                                },
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <Form.Control {...field} placeholder="eg: example@gmail.com" autoCapitalize="none" />
                                                </>
                                            )}
                                        />
                                        {errors?.sEmailID &&
                                            <span className='d-block text-danger text-end'>{errors?.sEmailID?.message}</span>
                                        }
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Mobile No. <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="sMobileNo"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: 'Mobile number is required', pattern: { value: /^\d{10}$/, message: 'Invalid mobile number' } }}
                                            render={({ field }) => (
                                                <>
                                                    <Form.Control
                                                        {...field}
                                                        placeholder="Enter mobile number"
                                                        maxLength={10}
                                                    />
                                                </>
                                            )}
                                        />
                                        {errors?.sMobileNo &&
                                            <span className='d-block text-danger text-end'>{errors?.sMobileNo?.message}</span>
                                        }
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>City <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="sCity"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: 'City is required' }}
                                            render={({ field }) => (
                                                <>
                                                    <Form.Control {...field} placeholder="Enter the city name" />
                                                </>
                                            )}
                                        />
                                        {errors?.sCity &&
                                            <span className='d-block text-danger text-end'>{errors?.sCity?.message}</span>
                                        }
                                    </Form.Group>
                                </Col> */}
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Country <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="sCountry"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: 'Country is required' }}
                                            render={({ field }) => (
                                                <>
                                                    <Form.Control {...field} placeholder="Enter the country name" />
                                                </>
                                            )}
                                        />
                                        {errors?.sCountry &&
                                            <span className='d-block text-danger text-end'>{errors?.sCountry?.message}</span>
                                        }
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Keywords <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="sKeywords"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: 'Keywords are required' }}
                                            render={({ field }) => (
                                                <>
                                                    <Form.Control {...field} placeholder="Enter the keywords" />
                                                </>
                                            )}
                                        />
                                        {errors?.sKeywords &&
                                            <span className='d-block text-danger text-end'>{errors?.sKeywords?.message}</span>
                                        }
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Upload Paper File <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="fPaperDocFile"
                                            control={control}
                                            rules={{
                                                required: 'Paper Doc file is required',
                                                validate: {
                                                    fileType: (value) => {
                                                        if (value && typeof (watch('fPaperDocFile')) !== 'string') {
                                                            const maxSize = 10 * 1024 * 1024; // 10MB in bytes
                                                            if (value.size >= maxSize) {
                                                                return "File size must be less than 10MB";
                                                            }
                                                        }
                                                        return true;
                                                    },
                                                }
                                            }}
                                            render={({ field: { onChange, value, ...field } }) => (
                                                <>
                                                    <Form.Control
                                                        type="file"
                                                        accept='.doc,.docx'
                                                        onChange={(e) => onChange(e.target.files[0])}
                                                        {...field}
                                                    />
                                                    <p className='m-0'><em style={{ color: 'gray', fontSize: '13px' }}>File must be .doc or .docx only</em></p>
                                                    {errors?.fPaperDocFile &&
                                                        <span className='d-block text-danger text-end'>{errors.fPaperDocFile.message}</span>
                                                    }
                                                </>
                                            )}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className={`article-details`}>
                        <div className='inner-content'>
                            <h5>Author Details:</h5><hr className='mt-0' />
                            <Row className='mt-4'>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Category <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="eCategory"
                                            control={control}
                                            rules={{ required: 'Category is required' }}
                                            render={({ field }) => (
                                                <>
                                                    <Select
                                                        {...field}
                                                        options={authorCategoryOption}
                                                        placeholder="Select author category"
                                                        isClearable
                                                    />
                                                    {errors?.eCategory &&
                                                        <span className='d-block text-danger text-end'>{errors?.eCategory?.message}</span>
                                                    }
                                                </>
                                            )}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Author Count <span className='text-danger'>*</span></Form.Label>
                                        <Controller
                                            name="sAuthorCount"
                                            control={control}
                                            rules={{ required: 'Author count is required' }}
                                            render={({ field }) => (
                                                <>
                                                    <Select
                                                        {...field}
                                                        options={authorCountOptions}
                                                        placeholder="Select author count"
                                                        isClearable
                                                    />
                                                    {errors?.sAuthorCount &&
                                                        <span className='d-block text-danger text-end'>{errors?.sAuthorCount?.message}</span>
                                                    }
                                                </>
                                            )}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col lg={12}>
                                    {fields.length > 0 && (
                                        <Row className='mt-4'>
                                            {fields.map((field, index) => (
                                                <>
                                                    <Col lg={6}>
                                                        <h4>Author - {index + 1}:</h4>
                                                        <AuthorCard key={field.id} control={control} index={index} errors={errors} />
                                                    </Col>
                                                </>
                                            ))}
                                        </Row>
                                    )}
                                </Col>

                            </Row>
                        </div>

                        <Button
                            type='submit'
                            className='me-2'
                            disabled={isLoading}
                        >
                            Submit {isLoading && <Spinner animation='border' size='sm' />}
                        </Button>

                        {/* <Button
                                    type='button'
                                    disabled={msg?.type !== 'submitted'}
                                    onClick={() => handlePaymentBtn()}
                                >
                                    Proceed to Pay {isLoading && <Spinner animation='border' size='sm' />}
                                </Button> */}

                        {msg?.data !== '' && <div className="mt-2">
                            <span className={msg.type === 'submitted' ? 'text-warning' : 'text-danger'}>{msg?.data}</span>
                        </div>}
                    </div>
                </Form>
            </div>
        </section>
    )
}

export default SubmitPaperOnline