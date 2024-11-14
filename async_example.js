function getOrderFromAPI(status) {
    return new Promise((resolve, reject) => {
        // assuming this is API call
        setTimeout(() => {
            console.log("-----------in API function-----------")
            if (status) {
                resolve([
                    { orderId: 1001, userId: 1, productIds: [101, 103], totalAmount: 999.98, status: "Shipped" },
                    { orderId: 1002, userId: 2, productIds: [102], totalAmount: 599.99, status: "Pending" },
                    { orderId: 1003, userId: 3, productIds: [104, 106], totalAmount: 499.98, status: "Delivered" },
                    { orderId: 1004, userId: 4, productIds: [105, 107], totalAmount: 649.98, status: "Canceled" },
                    { orderId: 1005, userId: 5, productIds: [101, 105], totalAmount: 1299.98, status: "Shipped" },
                    { orderId: 1006, userId: 6, productIds: [103, 106], totalAmount: 399.98, status: "Pending" },
                ])
            } else {
                reject("status is false, it failed")
            }
        }, 3000);
    })
}

async function retrieveOrders(status) {
    console.log("-----------before await function-----------")
    // try with await and without await
    const orders = await getOrderFromAPI(status)
    console.log("-----------after await function-----------")
    return orders
}

retrieveOrders(true)

function retrieveOrdersV2(status) {
    console.log("-----------before API call-----------")
    getOrderFromAPI(status).then(function (data) {
        console.log("-----------in .then call-----------")
        return data
    }).catch(function (error) {
        console.log("-----------in .catch call-----------")
        return error
    })
    console.log("-----------after API call-----------")
}

retrieveOrdersV2(false)