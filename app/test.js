var _submit = function(id, magId, wo) {
    jQuery.ajax({
        url: "/ServiceAction/com.saptac.hr.eva.servlet.EvaScoreAction?action=updateProScor",
        async: false,
        type: 'post',
        data: {
            "mstId": id,
            "listEvascore": JSON.stringify([{
                "proid": "2c9785816065afe60160684511760374",
                "score": "5"
            }, {
                "proid": "2c9785816065afe60160684f22bb04e1",
                "score": "5"
            }, {
                "proid": "2c9785816065afe60160685078bb05a8",
                "score": "5"
            }, {
                "proid": "2c9785816065afe601606851b21a0611",
                "score": "5"
            }, {
                "proid": "2c9785816065afe601606852beba0622",
                "score": "5"
            }, {
                "proid": "2c9785816065afe601606853d608062c",
                "score": "5"
            }, {
                "proid": "2c9785816065afe60160685c8a900670",
                "score": "5"
            }, {
                "proid": "2c9785816065afe6016068609ef1067b",
                "score": "5"
            }, {
                "proid": "2c9785816065afe601606861c78b0685",
                "score": "5"
            }, {
                "proid": "2c9785816065afe601606862d2e90690",
                "score": "5"
            }, {
                "proid": "2c9785816065afe601606863791d069a",
                "score": "5"
            }, {
                "proid": "2c9785816065afe601606864432906a4",
                "score": "5"
            }, {
                "proid": "2c9785816065afe601606865177106af",
                "score": "5"
            }]),
            "alleva": "A",
            "opinion": "",
            "beingeva": magId,
            "deptreqId": "2c978581606ad64301606dff7b621122",
            "parcipant": "2c9785825e398114015e3b23a2590077"
        },
        success: function(data) { //如果是ext请求，则resultData=data.responseText
            if (data == "true") { //提交成功
                console.log('评分成功');
                wo.window.close();
            } else { //提交失败
                alert(data);
            }
        }
    });
}