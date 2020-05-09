var Joi = require('@hapi/joi');

const ContactValidation = (data) => {
    const schema = Joi.object({
        firstname : Joi.string()
                    .min(4)
                    .required()
                    .messages({
                        'string.base': 'Invalid type, firstname must be astring',
                        'string.empty': 'Please enter your firstname',
                        'string.min': 'firstname must be at most {#limit} characters long',
                        'any.required': 'firstname is required'
                    }),
        lastname : Joi.string()
                   .min(4)
                   .required()
                   .messages({
                    'string.base': 'Invalid type, lastname must be astring',
                    'string.empty': 'Please enter your lastname',
                    'string.min': 'lastname must be at most {#limit} characters long',
                    'any.required': 'lastname is required'
                    }),
        email : Joi.string()
                .min(5)
                .email()
                .required()
                .messages({
                    'string.base': 'Invalid type, email must be astring',
                    'string.empty': 'Please enter your email',                    
                    'any.required': 'email is required'
                }), 
        number : Joi.number()
                 .min(11)
                 .required()
                 .messages({
                    'number.base': 'Invalid type, number must be astring',
                    'number.empty': 'Please enter your number',
                    'number.min': 'number must be at most {#limit} characters long',
                    'any.required': 'firstname is required'
                }),
        need : Joi.string()
                     

    });
    return schema.validate(data)
}
module.exports.ContactValidation = ContactValidation;