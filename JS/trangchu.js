
        $(document).ready(function(){
            var i=1;
            $("#btn1").click(function(){
                $("#myModal").modal();
            });
            function kiemTraTen(){
                var i=1;
                let mauKT=/([A-Z]{1}[a-z]+)((\s[A-Z]{1}[a-z]+){1,})$/;
                if ($("#Name").val()==""){
                    $("#tbName").html("Không để trống");
                    return false;
                }
                if(!mauKT.test($("#Name").val())){
                    $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
                    return true;
                }
                $("#tbName").html("*");
                return true;
            }
            $("#Name").blur(kiemTraTen);

            function kiemTraSoAo(){
                var mauKT=/^[1-9]$/;
                if ($("#Ao").val() == ""){
                    $("#tbAo").html("Không để trống");
                    return false;
                }
                if(!mauKT.test($("#Ao").val())){
                    $("#tbAo").html("Dùng từ 1 đến 9");
                    return true;
                } else {
                    var soAo = $("#Ao").val();
                    if(soAo<1 || aoSo>9){
                        $("#tbAo").html("từ 1 đến 9");
                    } else {
                        $("#tbAo").html("*");
                        return true;
                    }
                }
            }
            $("#Ao").blur(kiemTraSoAo);
            
            function kiemTraCLB(){
                var mauKT=/^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
                if ($("#CLB").val() == ""){
                    $("#tbCLB").html("Không để trống");
                    return false;
                }
                if(!mauKT.test($("#CLB").val())){
                    $("#tbCLB").html("Mỗi ký tự đầu viết hoa không sử dụng số");
                    return true;
                }
                $("#CLB").blur(kiemTraCLB);
                return true;
            }
            function kiemTraNTT(){
                if ($("#NTT").val() == ""){
                    $("#tbNTT").html("Không để trống");
                    return false;
                }
                var today=new Date();
                var ntt = new Date($("#NTT").val());
                today.setDate(today.getDate() + 15)
                if(today>ntt){
                    $("#tbNTT").html("Phải sau này hiện tại 15 ngày");
                    return false;
                }
                $("#tbNTT").html("*");
                    return true;
            }
            $("#NTT").blur(kiemTraNTT);

            function kiemTraSDT(){
                var mauKT=/^0\d{3}-\d{3}-\d{3}$/;
                if ($("#SDT").val() == ""){
                    $("#tbSDT").html("Không để trống");
                    return false;
                }
                if(!mauKT.test($("#SDT").val())){
                    $("#tbSDT").html("Thoe dạng 0xxx-xxx-xxx ");
                    return true;
                }
                $("#tbSDT").html("*");
                    return true;
            }
            $("#SDT").blur(kiemTraSDT);

            $("#Save").click(function(){
                if(kiemTraTen()==true && kiemTraSoAo()== true && kiemTraNTT()== true && kiemTraCLB()== true ){
                    row = "<tr>"
                    row += "<th>" + (i++) + "</th>";
                    row += "<th>" + $("#Name").val() + "</th>";
                    row += "<th>" + $("#Ao").val() + "</th>";
                    row += "<th>" + $("#CLB").val() + "</th>";
                    row += "<th>" + $("#NTT").val() + "</th>";
                    row += "<th>" + $("#SDT").val() + "</th>";
                    row += "<th>" + $("#Avt").val() + "</th>";
                    $("#danhSachdoituyenvietnam").append(row);
                    $("#myModal").modal("hide");
                }
            }
            )
        })
