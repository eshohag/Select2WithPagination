// For demonstration purposes we first make
// a huge array of demo data (20 000 items)
// HEADS UP; for the _.map function i use underscore (actually lo-dash) here
(function () {
    var isDataLoaded = false;
    function mockData() {
        debugger;
        var data = JSON.parse('[{"id":0,"text":"Test Data-0"},{"id":1,"text":"Test Data-1"},{"id":2,"text":"Test Data-2"},{"id":3,"text":"Test Data-3"},{"id":4,"text":"Test Data-4"},{"id":5,"text":"Test Data-5"},{"id":6,"text":"Test Data-6"},{"id":7,"text":"Test Data-7"},{"id":8,"text":"Test Data-8"},{"id":9,"text":"Test Data-9"},{"id":10,"text":"Test Data-10"},{"id":11,"text":"Test Data-11"},{"id":12,"text":"Test Data-12"},{"id":13,"text":"Test Data-13"},{"id":14,"text":"Test Data-14"},{"id":15,"text":"Test Data-15"},{"id":16,"text":"Test Data-16"},{"id":17,"text":"Test Data-17"},{"id":18,"text":"Test Data-18"},{"id":19,"text":"Test Data-19"},{"id":20,"text":"Test Data-20"},{"id":21,"text":"Test Data-21"},{"id":22,"text":"Test Data-22"},{"id":23,"text":"Test Data-23"},{"id":24,"text":"Test Data-24"},{"id":25,"text":"Test Data-25"},{"id":26,"text":"Test Data-26"},{"id":27,"text":"Test Data-27"},{"id":28,"text":"Test Data-28"},{"id":29,"text":"Test Data-29"},{"id":30,"text":"Test Data-30"},{"id":31,"text":"Test Data-31"},{"id":32,"text":"Test Data-32"},{"id":33,"text":"Test Data-33"},{"id":34,"text":"Test Data-34"},{"id":35,"text":"Test Data-35"},{"id":36,"text":"Test Data-36"},{"id":37,"text":"Test Data-37"},{"id":38,"text":"Test Data-38"},{"id":39,"text":"Test Data-39"},{"id":40,"text":"Test Data-40"},{"id":41,"text":"Test Data-41"},{"id":42,"text":"Test Data-42"},{"id":43,"text":"Test Data-43"},{"id":44,"text":"Test Data-44"},{"id":45,"text":"Test Data-45"},{"id":46,"text":"Test Data-46"},{"id":47,"text":"Test Data-47"},{"id":48,"text":"Test Data-48"},{"id":49,"text":"Test Data-49"},{"id":50,"text":"Test Data-50"},{"id":51,"text":"Test Data-51"},{"id":52,"text":"Test Data-52"},{"id":53,"text":"Test Data-53"},{"id":54,"text":"Test Data-54"},{"id":55,"text":"Test Data-55"},{"id":56,"text":"Test Data-56"},{"id":57,"text":"Test Data-57"},{"id":58,"text":"Test Data-58"},{"id":59,"text":"Test Data-59"},{"id":60,"text":"Test Data-60"},{"id":61,"text":"Test Data-61"},{"id":62,"text":"Test Data-62"},{"id":63,"text":"Test Data-63"},{"id":64,"text":"Test Data-64"},{"id":65,"text":"Test Data-65"},{"id":66,"text":"Test Data-66"},{"id":67,"text":"Test Data-67"},{"id":68,"text":"Test Data-68"},{"id":69,"text":"Test Data-69"},{"id":70,"text":"Test Data-70"},{"id":71,"text":"Test Data-71"},{"id":72,"text":"Test Data-72"},{"id":73,"text":"Test Data-73"},{"id":74,"text":"Test Data-74"},{"id":75,"text":"Test Data-75"},{"id":76,"text":"Test Data-76"},{"id":77,"text":"Test Data-77"},{"id":78,"text":"Test Data-78"},{"id":79,"text":"Test Data-79"},{"id":80,"text":"Test Data-80"},{"id":81,"text":"Test Data-81"},{"id":82,"text":"Test Data-82"},{"id":83,"text":"Test Data-83"},{"id":84,"text":"Test Data-84"},{"id":85,"text":"Test Data-85"},{"id":86,"text":"Test Data-86"},{"id":87,"text":"Test Data-87"},{"id":88,"text":"Test Data-88"},{"id":89,"text":"Test Data-89"},{"id":90,"text":"Test Data-90"},{"id":91,"text":"Test Data-91"},{"id":92,"text":"Test Data-92"},{"id":93,"text":"Test Data-93"},{"id":94,"text":"Test Data-94"},{"id":95,"text":"Test Data-95"},{"id":96,"text":"Test Data-96"},{"id":97,"text":"Test Data-97"},{"id":98,"text":"Test Data-98"},{"id":99,"text":"Test Data-99"},{"id":100,"text":"Test Data-100"},{"id":101,"text":"Test Data-101"},{"id":102,"text":"Test Data-102"},{"id":103,"text":"Test Data-103"},{"id":104,"text":"Test Data-104"},{"id":105,"text":"Test Data-105"},{"id":106,"text":"Test Data-106"},{"id":107,"text":"Test Data-107"},{"id":108,"text":"Test Data-108"},{"id":109,"text":"Test Data-109"},{"id":110,"text":"Test Data-110"},{"id":111,"text":"Test Data-111"},{"id":112,"text":"Test Data-112"},{"id":113,"text":"Test Data-113"},{"id":114,"text":"Test Data-114"},{"id":115,"text":"Test Data-115"},{"id":116,"text":"Test Data-116"},{"id":117,"text":"Test Data-117"},{"id":118,"text":"Test Data-118"},{"id":119,"text":"Test Data-119"},{"id":120,"text":"Test Data-120"},{"id":121,"text":"Test Data-121"},{"id":122,"text":"Test Data-122"},{"id":123,"text":"Test Data-123"},{"id":124,"text":"Test Data-124"},{"id":125,"text":"Test Data-125"},{"id":126,"text":"Test Data-126"},{"id":127,"text":"Test Data-127"},{"id":128,"text":"Test Data-128"},{"id":129,"text":"Test Data-129"},{"id":130,"text":"Test Data-130"},{"id":131,"text":"Test Data-131"},{"id":132,"text":"Test Data-132"},{"id":133,"text":"Test Data-133"},{"id":134,"text":"Test Data-134"},{"id":135,"text":"Test Data-135"},{"id":136,"text":"Test Data-136"},{"id":137,"text":"Test Data-137"},{"id":138,"text":"Test Data-138"},{"id":139,"text":"Test Data-139"},{"id":140,"text":"Test Data-140"},{"id":141,"text":"Test Data-141"},{"id":142,"text":"Test Data-142"},{"id":143,"text":"Test Data-143"},{"id":144,"text":"Test Data-144"},{"id":145,"text":"Test Data-145"},{"id":146,"text":"Test Data-146"},{"id":147,"text":"Test Data-147"},{"id":148,"text":"Test Data-148"},{"id":149,"text":"Test Data-149"},{"id":150,"text":"Test Data-150"},{"id":151,"text":"Test Data-151"},{"id":152,"text":"Test Data-152"},{"id":153,"text":"Test Data-153"},{"id":154,"text":"Test Data-154"},{"id":155,"text":"Test Data-155"},{"id":156,"text":"Test Data-156"},{"id":157,"text":"Test Data-157"},{"id":158,"text":"Test Data-158"},{"id":159,"text":"Test Data-159"},{"id":160,"text":"Test Data-160"},{"id":161,"text":"Test Data-161"},{"id":162,"text":"Test Data-162"},{"id":163,"text":"Test Data-163"},{"id":164,"text":"Test Data-164"},{"id":165,"text":"Test Data-165"},{"id":166,"text":"Test Data-166"},{"id":167,"text":"Test Data-167"},{"id":168,"text":"Test Data-168"},{"id":169,"text":"Test Data-169"},{"id":170,"text":"Test Data-170"},{"id":171,"text":"Test Data-171"},{"id":172,"text":"Test Data-172"},{"id":173,"text":"Test Data-173"},{"id":174,"text":"Test Data-174"},{"id":175,"text":"Test Data-175"},{"id":176,"text":"Test Data-176"},{"id":177,"text":"Test Data-177"},{"id":178,"text":"Test Data-178"},{"id":179,"text":"Test Data-179"},{"id":180,"text":"Test Data-180"},{"id":181,"text":"Test Data-181"},{"id":182,"text":"Test Data-182"},{"id":183,"text":"Test Data-183"},{"id":184,"text":"Test Data-184"},{"id":185,"text":"Test Data-185"},{"id":186,"text":"Test Data-186"},{"id":187,"text":"Test Data-187"},{"id":188,"text":"Test Data-188"},{"id":189,"text":"Test Data-189"},{"id":190,"text":"Test Data-190"},{"id":191,"text":"Test Data-191"},{"id":192,"text":"Test Data-192"},{"id":193,"text":"Test Data-193"},{"id":194,"text":"Test Data-194"},{"id":195,"text":"Test Data-195"},{"id":196,"text":"Test Data-196"},{"id":197,"text":"Test Data-197"},{"id":198,"text":"Test Data-198"},{"id":199,"text":"Test Data-199"},{"id":200,"text":"Test Data-200"},{"id":201,"text":"Test Data-201"},{"id":202,"text":"Test Data-202"},{"id":203,"text":"Test Data-203"},{"id":204,"text":"Test Data-204"},{"id":205,"text":"Test Data-205"},{"id":206,"text":"Test Data-206"},{"id":207,"text":"Test Data-207"},{"id":208,"text":"Test Data-208"},{"id":209,"text":"Test Data-209"},{"id":210,"text":"Test Data-210"},{"id":211,"text":"Test Data-211"},{"id":212,"text":"Test Data-212"},{"id":213,"text":"Test Data-213"},{"id":214,"text":"Test Data-214"},{"id":215,"text":"Test Data-215"},{"id":216,"text":"Test Data-216"},{"id":217,"text":"Test Data-217"},{"id":218,"text":"Test Data-218"},{"id":219,"text":"Test Data-219"},{"id":220,"text":"Test Data-220"},{"id":221,"text":"Test Data-221"},{"id":222,"text":"Test Data-222"},{"id":223,"text":"Test Data-223"},{"id":224,"text":"Test Data-224"},{"id":225,"text":"Test Data-225"},{"id":226,"text":"Test Data-226"},{"id":227,"text":"Test Data-227"},{"id":228,"text":"Test Data-228"},{"id":229,"text":"Test Data-229"},{"id":230,"text":"Test Data-230"},{"id":231,"text":"Test Data-231"},{"id":232,"text":"Test Data-232"},{"id":233,"text":"Test Data-233"},{"id":234,"text":"Test Data-234"},{"id":235,"text":"Test Data-235"},{"id":236,"text":"Test Data-236"},{"id":237,"text":"Test Data-237"},{"id":238,"text":"Test Data-238"},{"id":239,"text":"Test Data-239"},{"id":240,"text":"Test Data-240"},{"id":241,"text":"Test Data-241"},{"id":242,"text":"Test Data-242"},{"id":243,"text":"Test Data-243"},{"id":244,"text":"Test Data-244"},{"id":245,"text":"Test Data-245"},{"id":246,"text":"Test Data-246"},{"id":247,"text":"Test Data-247"},{"id":248,"text":"Test Data-248"},{"id":249,"text":"Test Data-249"},{"id":250,"text":"Test Data-250"},{"id":251,"text":"Test Data-251"},{"id":252,"text":"Test Data-252"},{"id":253,"text":"Test Data-253"},{"id":254,"text":"Test Data-254"},{"id":255,"text":"Test Data-255"},{"id":256,"text":"Test Data-256"},{"id":257,"text":"Test Data-257"},{"id":258,"text":"Test Data-258"},{"id":259,"text":"Test Data-259"},{"id":260,"text":"Test Data-260"},{"id":261,"text":"Test Data-261"},{"id":262,"text":"Test Data-262"},{"id":263,"text":"Test Data-263"},{"id":264,"text":"Test Data-264"},{"id":265,"text":"Test Data-265"},{"id":266,"text":"Test Data-266"},{"id":267,"text":"Test Data-267"},{"id":268,"text":"Test Data-268"},{"id":269,"text":"Test Data-269"},{"id":270,"text":"Test Data-270"},{"id":271,"text":"Test Data-271"},{"id":272,"text":"Test Data-272"},{"id":273,"text":"Test Data-273"},{"id":274,"text":"Test Data-274"},{"id":275,"text":"Test Data-275"},{"id":276,"text":"Test Data-276"},{"id":277,"text":"Test Data-277"},{"id":278,"text":"Test Data-278"},{"id":279,"text":"Test Data-279"},{"id":280,"text":"Test Data-280"},{"id":281,"text":"Test Data-281"},{"id":282,"text":"Test Data-282"},{"id":283,"text":"Test Data-283"},{"id":284,"text":"Test Data-284"},{"id":285,"text":"Test Data-285"},{"id":286,"text":"Test Data-286"},{"id":287,"text":"Test Data-287"},{"id":288,"text":"Test Data-288"},{"id":289,"text":"Test Data-289"},{"id":290,"text":"Test Data-290"},{"id":291,"text":"Test Data-291"},{"id":292,"text":"Test Data-292"},{"id":293,"text":"Test Data-293"},{"id":294,"text":"Test Data-294"},{"id":295,"text":"Test Data-295"},{"id":296,"text":"Test Data-296"},{"id":297,"text":"Test Data-297"},{"id":298,"text":"Test Data-298"},{"id":299,"text":"Test Data-299"}]');
        $.ajax('/Home/Data',   // request url
        {
            success: function (data, status, xhr) {
                data = JSON.parse(data);


            }
        });

        //return _.map(_.range(1, data.length), function (i) {
        //    return {
        //        id: data[i].id,
        //        text: data[i].text,
        //    };
        //});

        //setTimeout(
        //    function () {
        //        $.ajax('/Home/Data',   // request url
        //        {
        //            success: function (data, status, xhr) {
        //                data = JSON.parse(data);
        //            }
        //        });
        //    }, 5000);

        return data;


    }
    // init select 2
    $('#test').select2({
        data: mockData(),
        placeholder: 'search',
        multiple: true,
        // query with pagination
        query: function (q) {
            debugger;
            var pageSize,
                results,
                that = this;
            pageSize = 20; // or whatever pagesize
            results = [];
            if (q.term && q.term !== '') {
                debugger;

                // HEADS UP; for the _.filter function i use underscore (actually lo-dash) here
                results = _.filter(that.data, function (e) {
                    return e.text.toUpperCase().indexOf(q.term.toUpperCase()) >= 0;
                });
                var dlsi = 11;
            } else if (q.term === '') {
                debugger;
                results = that.data;
            }
            q.callback({

                results: results.slice((q.page - 1) * pageSize, q.page * pageSize),
                more: results.length >= q.page * pageSize,
            });
        },
    });
})();
