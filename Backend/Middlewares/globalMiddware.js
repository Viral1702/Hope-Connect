const validateRequest = (schema) => (req, res, next) => {
  try {
    const isValid = schema.safeParse(req.body);

    if (!isValid.success) {
      return res.status(400).json({
        message: "Invalid Inputs",
        errors: isValid.error.format(),
      });
    }

    next();
  } catch (error) {
    console.error("Validation Middleware Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = validateRequest;
