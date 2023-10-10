const { busService } = require("../services");
/**create bus */
const createBus = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody, "+++++++++ reqBody.createbus");
    const bus = await busService.createBus(reqBody);
    if (!bus) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "success",
      data: bus,
      data: `${bus.routeName}`,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**get bus list */
const getBusList = async (req, res) => {
  try {
    const BusList = await busService.getBusList(req, res);
    res.status(200).json({
      success: true,
      message: "success",
      data: { BusList },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**get bus detalis by id */
const getBusDetails = async (req, res) => {
  try {
    const busDetails = await busService.getBusById(req.params.busId);
    if (!busDetails) {
      throw new Error("bus not found");
    }
    res.status(200).json({
      success: "bus details get successfully",
      data: busDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**delete bus by id */
const deleteBus = async (req, res) => {
  try {
    const busid = req.params.busId;
    const busExists = await busService.getBusById(busid);
    if (!busExists) {
      throw new Error("bus name not found");
    }
    await busService.deleteBus(busid);
    res.status(200).json({
      success: true,
      message: `bus ${busid}  deleted`,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* --------------------------------- update bus --------------------------------- */
const updateBus = async (req, res) => {
  try {
    const busId = req.params.busId;
    const busEx = await busService.getBusById(busId);
    if (!busEx) {
      throw new Error("bus not found");
    }
    await busService.updateBus(busId);
    res.status(201).json({
      success: true,
      message: "successfuly bus",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBus,
  getBusList,
  getBusDetails,
  deleteBus,
  updateBus,
};
