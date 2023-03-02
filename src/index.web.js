import $ from "jquery"

export async function ajax(url, data, type, dataType) {

    let result = await $.ajax(url, {

        type: type,
        data: data,
        dataType: dataType

    });

    return result;

}

window.ajax = ajax;
