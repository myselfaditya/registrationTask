const isValidMail = (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/);

const isValidName = (/^[a-zA-Z. ]{1,20}$/)

const isValid = (value) => {
    if (typeof value === "undefined" || value === " " || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}

const isValidMobile = /^[6-9]{1}[0-9]{9}$/;

const isValidPassword = function (value) {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(value)) return true;
    return false;
};

const isValidRequestBody = (value) => {
    return Object.keys(value).length > 0
}

module.exports = {
    isValidMail, isValid, isValidName, isValidMobile, isValidPassword, isValidRequestBody
}