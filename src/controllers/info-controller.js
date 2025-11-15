const  { StatusCodes} = require('http-status-codes')

const info = (res,req) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "API is live",
        error: {},
        data: {}
    })
}