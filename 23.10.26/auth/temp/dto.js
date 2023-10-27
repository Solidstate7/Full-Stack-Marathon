class BaseDTO {
    validate(props) {
        if (!props) throw new Error("Empty Body.");
        if (typeof props !== "object") throw new Error("Body TypeError.");

        for (const key in props) {
            if (!props[key]) {
                throw new Error(`${key} is empty.`);
            }
        }
    }
}

module.exports = BaseDTO;
