import { archives } from "@/data/archives"

export default function handler (req, res) {
    const { archiveID } = req.query
    const archive_data = archives.find(data => data._id === archiveID)
    res.status(200).json(archive_data)
}