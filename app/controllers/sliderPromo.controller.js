import SliderPromo from "../models/sliderPromo.model.js";

export const getSliderPromo = async(req, res) => {
    try {
        const response = await SliderPromo.find();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSliderPromoId = async(req, res) => {
    try {
        const response = await SliderPromo.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createSliderPromo = async(req, res) => {
    try {
        await SliderPromo.create(req.body);
        res.status(201).json({msg: "Slider Promo Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteSliderPromo = async(req, res) => {
    try {
        const sliderPromoId = req.params.id;
    
        const sliderPromo = await SliderPromo.findById(sliderPromoId);
        if (!sliderPromo) {
          return res.status(404).json({ error: "Slider Promo not found" });
        }
    
        await sliderPromo.deleteOne();
    
        res.status(200).json({ message: "Slider Promo deleted successfully" });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
      }
}
