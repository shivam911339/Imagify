import axios from 'axios'
import userModel from '../models/userModel.js'

// Controller function to generate image from prompt
// http://localhost:4000/api/image/generate-image
export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body

    // Fetching User Details Using userId
    const user = await userModel.findById(userId)

    if (!user || !prompt) {
      return res.json({ success: false, message: 'Missing Details' })
    }

    // Checking User creditBalance
    if (user.creditBalance <= 0) {
      return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance })
    }

    // Calling Pollinations free text-to-image API
    const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&nologo=true`
    const response = await axios.get(pollinationsUrl, {
      responseType: 'arraybuffer',
      timeout: 60000,
      headers: {
        Accept: 'image/png'
      }
    })

    // Conversion of arrayBuffer to base64
    const base64Image = Buffer.from(response.data, 'binary').toString('base64')
    const resultImage = `data:image/png;base64,${base64Image}`

    // Deduction of user credit
    await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

    // Sending Response
    res.json({ success: true, message: 'Image generated', resultImage, creditBalance: user.creditBalance - 1 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Failed to generate image. Please try again.' })
  }
}