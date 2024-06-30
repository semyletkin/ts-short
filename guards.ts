// Guards - вспомогательные конструкции которые помогают работать с типами (проверять их) (так же присутствуют в js)

// typeof
function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

// instanceof
function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}



type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    console.log(type)
}

setAlertType('success')
setAlertType('danger')

// Ошибка так как передан невалидный тип
//setAlertType('wrong type')
