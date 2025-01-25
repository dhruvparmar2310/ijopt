import React from 'react'
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

const AuthorCard = ({ control, index, errors }) => {
    return (
        <div className="author-card mb-3 p-3 border rounded">
            <Form.Group className="mb-3">
                <Form.Label>Name <span className='text-danger'>*</span></Form.Label>
                <Controller
                    name={`authors[${index}].name`}
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => (
                        <Form.Control {...field} placeholder="Enter author name" />
                    )}
                />
                {errors?.authors?.[index]?.name && (
                    <span className='d-block text-danger text-end'>{errors.authors[index].name.message}</span>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Designation <span className='text-danger'>*</span></Form.Label>
                <Controller
                    name={`authors[${index}].designation`}
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Designation is required' }}
                    render={({ field }) => (
                        <Form.Control {...field} placeholder="Enter designation" />
                    )}
                />
                {errors?.authors?.[index]?.designation && (
                    <span className='d-block text-danger text-end'>{errors.authors[index].designation.message}</span>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mobile Number <span className='text-danger'>*</span></Form.Label>
                <Controller
                    name={`authors[${index}].mobileNumber`}
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Mobile number is required',
                        pattern: {
                            value: /^\d{10}$/, message: 'Invalid mobile number'
                        }
                    }}
                    render={({ field }) => (
                        <Form.Control {...field} placeholder="Enter mobile number" maxLength={10} />
                    )}
                />
                {errors?.authors?.[index]?.mobileNumber && (
                    <span className='d-block text-danger text-end'>{errors.authors[index].mobileNumber.message}</span>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email Address <span className='text-danger'>*</span></Form.Label>
                <Controller
                    name={`authors[${index}].emailID`}
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
                {errors?.authors?.[index]?.emailID &&
                    <span className='d-block text-danger text-end'>{errors?.authors?.[index]?.emailID?.message}</span>
                }
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>ORCID ID</Form.Label>
                <Controller
                    name={`authors[${index}].orcidID`}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <>
                            <Form.Control {...field} placeholder="eg: 0000-1234-5678-9101" autoCapitalize="none" />
                        </>
                    )}
                />
                {errors?.authors?.[index]?.orcidID &&
                    <span className='d-block text-danger text-end'>{errors?.authors?.[index]?.orcidID?.message}</span>
                }
            </Form.Group>
        </div>
    );
};

export default AuthorCard