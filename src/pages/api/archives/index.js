import { archives } from "@/data/archives"

export default function handler (req, res) {
    try {
        res.status(200).json({ archives })
      } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
      }
}