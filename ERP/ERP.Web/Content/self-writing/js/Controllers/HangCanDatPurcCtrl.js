﻿app.controller('HangCanDatPurcCtrl', function ($http, $scope) {
    var username = $('#username').val();
    var isadmin = $('#isadmin').val();

    $scope.Detail = {
        ListAdd: [],
        ListNew: [],
        ListTach: [],
        ListXoa: [],
    }



    $http.get('/api/Api_HangCanDatPurchase/GetHangCanDatPurchase/' + isadmin + '/' + username).then(function (response) {
        $scope.list_hangcandatpurc = response.data;
    });


    // Chon khach hang PO moi

    $scope.arrayNew_MuaFinded = [];
    $scope.arrayMuaHang = [];
    $scope.showtable_NCC_DatHang = false;

    $http.get(window.location.origin + '/api/Api_HangCanDatPurchase/GetNhaCungCapTheoPurchase/' + isadmin + '/' + username)
     .then(function (response) {
         if (response.data) {
             $scope.arrayMuaHang = response.data;
             $scope.arrayNew_MuaFinded = $scope.arrayMuaHang.map(function (item) {
                 return item;
             });
         }
     }, function (error) {
         console.log(error);
     });
    //hàm tìm kiếm
    $scope.onMuaHangFind = function () {
        if (!$scope.TEN_NHA_CUNG_CAP) {
            $scope.arrayNew_MuaFinded = $scope.arrayMuaHang.map(function (item) {
                return item;
            });
        }
        $scope.arrayNew_MuaFinded = $scope.arrayMuaHang.filter(function (item) {
            if (item.TEN_NHA_CUNG_CAP.toLowerCase().indexOf($scope.ten_ncc.toLowerCase()) >= 0) {
                return true;
            } else {
                return false;
            }
        });
    }

    // hiển thị danh sách đổi tượng(LẤY THEO MÃ)
    $scope.showInfo_NCC = function (p_dt) {
        $scope.ten_ncc = p_dt.TEN_NHA_CUNG_CAP;
        $scope.ma_ncc = p_dt.MA_NHA_CUNG_CAP;
        $scope.van_phong_giao_dich = p_dt.VAN_PHONG_GIAO_DICH;
        $scope.dia_chi_xuat_hoa_don = p_dt.DIA_CHI_XUAT_HOA_DON;
        $scope.sdt = p_dt.SDT;
        $scope.fax = p_dt.FAX;
        $scope.showtable_NCC_DatHang = false;
        $scope.lienhekh(p_dt.MA_NHA_CUNG_CAP);
        $scope.nguoi_lien_he = '';
    }

    // Lien he
    $scope.arrayLHFinded = [];
    $scope.arrayLH = [];
    $scope.showtable_id_lien_he = false;

    $scope.lienhekh = function (url) {
        //get data liên hệ
        $http.post(window.location.origin + '/api/Api_LienHeNCC/LocLienHeNCC/' + url)
             .then(function (response) {
                 if (response.data) {
                     $scope.arrayLH = response.data;
                     $scope.arrayLHFinded = $scope.arrayLH.map(function (item) {
                         return item;
                     });
                 }
             }, function (error) {
                 console.log(error);
             });
    }



    //hàm tìm kiếm
    $scope.onLienHeFind = function () {
        if (!$scope.NGUOI_LIEN_HE) {
            $scope.arrayLHFinded = $scope.arrayLH.map(function (item) {
                return item;
            });
        }
        $scope.arrayLHFinded = $scope.arrayLH.filter(function (item) {
            if (item.NGUOI_LIEN_HE.toLowerCase().indexOf($scope.arrayLienHe.nguoi_lien_he.toLowerCase()) >= 0) {
                return true;
            } else {
                return false;
            }
        });
    }

    // hiển thị danh sách đổi tượng(LẤY THEO MÃ)
    $scope.showInfoLH = function (p_dt) {
        $scope.id_lien_he = p_dt.ID_LIEN_HE;
        $scope.nguoi_lien_he = p_dt.NGUOI_LIEN_HE;
        $scope.email_ca_nhan = p_dt.EMAIL_CA_NHAN;
        $scope.sdt1 = p_dt.SDT1;
        $scope.email_cong_ty = p_dt.EMAIL_CONG_TY;
        $scope.showtable_id_lien_he = false;
    }

    //mảng hang hoa
    $scope.arrayHHFinded = [];
    $scope.arrayHH = [];
    $scope.showtable_hanghoa = false;

    //get data hang hoa

    $scope.AddNewHang = function (item,kiemtra) {
        $scope.item = item;

        if(kiemtra == true)
        {
            $scope.Detail.ListAdd.push({
                ID : $scope.item.ID,
            })
            if ($scope.Detail.ListNew.length == 0) {
                $scope.Detail.ListNew.push({
                    id_ban_hang: $scope.item.ID,
                    ten_hang : $scope.item.TEN_HANG,
                    ma_hang: $scope.item.MA_HANG,
                    so_luong: $scope.item.SO_LUONG,
                    don_gia_chua_vat: 0,
                    thoi_gian_giao_hang: '',
                    ghi_chu: '',
                    ma_dieu_chinh: $scope.item.MA_DIEU_CHINH,
                    hang: $scope.item.MA_NHOM_HANG_CHI_TIET,
                    don_gia_ban: $scope.item.DON_GIA,
                    thanh_tien: 0,
                });
            } else {
                var count = 0;
                angular.forEach($scope.Detail.ListNew, function (value, key) {
                    if (value.ma_hang == item.MA_HANG)
                    {

                        count++
                        value.so_luong = value.so_luong + item.SO_LUONG
                    }
                });
                console.log(count);
                if (count == 0) {
                    $scope.Detail.ListNew.push({
                        id_ban_hang: $scope.item.ID,
                        ten_hang: $scope.item.TEN_HANG,
                        ma_hang: $scope.item.MA_HANG,
                        so_luong: $scope.item.SO_LUONG,
                        don_gia_chua_vat: 0,
                        thoi_gian_giao_hang: '',
                        ghi_chu: '',
                        ma_dieu_chinh: $scope.item.MA_DIEU_CHINH,
                        hang: $scope.item.MA_NHOM_HANG_CHI_TIET,
                        don_gia_ban: $scope.item.DON_GIA,
                        thanh_tien: 0,
                    });
                } else if (count > 0) {
                    
                }
               
            }
        }

    };

    $scope.test = function (detail) {
        $scope.detail = detail;
        var tong_tien_hang = 0;

        $scope.detail.thanh_tien_chua_vat = parseFloat($scope.detail.so_luong * parseInt($scope.detail.don_gia_chua_vat));

        for (i = 0; i < $scope.Detail.ListNew.length; i++) {
            tong_tien_hang = parseInt(tong_tien_hang + $scope.Detail.ListNew[i].thanh_tien_chua_vat);
        }
        $scope.tong_tien_hang = tong_tien_hang;
        $scope.tien_thue_vat = parseFloat($scope.tong_tien_hang * ($scope.thue_vat / 100));
        $scope.tong_tien_da_bao_gom_vat =parseFloat( $scope.tong_tien_hang + $scope.tien_thue_vat);
        $scope.tong_tien_bang_chu = docso(parseInt($scope.tong_tien_da_bao_gom_vat));
    };

    $scope.CreateNewMuaHang = function () {
        $scope.ThongTinChung = {
            NGUOI_TAO: username,
            NHA_CUNG_CAP: $scope.ma_ncc,
            NGUOI_LIEN_HE: $scope.id_lien_he,
            DIA_DIEM_GIAO_HANG: $scope.dia_diem_giao_hang,
            HINH_THUC_VAN_CHUYEN: $scope.hinh_thuc_van_chuyen,
            HINH_THUC_THANH_TOAN: $scope.hinh_thuc_thanh_toan,
            THOI_HAN_THANH_TOAN: $scope.thoi_han_thanh_toan,
            TIEN_THUE_VAT: $scope.tien_thue_vat,
            TONG_TIEN_BANG_CHU: $scope.tong_tien_bang_chu,
            TONG_TIEN_HANG: $scope.tong_tien_hang,
            THUE_VAT: $scope.thue_vat,
            TONG_TIEN_DA_BAO_GOM_VAT : $scope.tong_tien_da_bao_gom_vat
        };

        $scope.arrayChiTiet = [];

        for (var i = 0; i < $scope.Detail.ListNew.length; i++) {


            var MuaHangChiTiet = {
                MA_HANG: $scope.Detail.ListNew[i].ma_hang,
                SL: $scope.Detail.ListNew[i].so_luong,
                DVT: $scope.Detail.ListNew[i].dvt,
                DON_GIA_CHUA_VAT: $scope.Detail.ListNew[i].don_gia_chua_vat,
                THANH_TIEN_CHUA_VAT: $scope.Detail.ListNew[i].thanh_tien_chua_vat,
                THOI_GIAN_GIAO_HANG: $scope.Detail.ListNew[i].thoi_gian_giao_hang,
                GHI_CHU: $scope.Detail.ListNew[i].ghi_chu,                
                GIA_BAN_RA: $scope.Detail.ListNew[i].don_gia_ban,
                ID_BAN_HANG : $scope.Detail.ListNew[i].id_ban_hang
            }
            //PUSH ChiTietGiu VÀO MẢNG arrayChiTietGiu
            $scope.arrayChiTiet.push(MuaHangChiTiet);
        }

        //Lưu vào CSDL
        $http.post("/api/Api_DonPOMuaHang/ThongTinChungPOMuaHang", $scope.ThongTinChung)
            .then(function successCallback(response) {
                $scope.ThongTinChung = response.data;
                if (!$scope.ThongTinChung) {
                    ErrorSystem("Không thêm mới được thông tin chung mua hàng PO");
                    return;
                }
                $scope.ThongTinChung.MA_SO_PO;

                for (var i = 0; i < $scope.arrayChiTiet.length; i++) {
                    $scope.arrayChiTiet[i].MA_SO_PO = $scope.ThongTinChung.MA_SO_PO;
                }


                if ($scope.arrayChiTiet.length > 0) {
                    $http.post("/api/Api_DonPOMuaHang/ChiTietPOMuaHang", $scope.arrayChiTiet)
                        .then(function successCallback(response) {
                            SuccessSystem("Thêm thành công!");
                            $http.post('/api/Api_ChiTiet_DonHangPO/SuaDatHang', $scope.Detail.ListAdd).then(function (response) {
                                $http.get('/api/Api_HangCanDatPurchase/GetHangCanDatPurchase/' + isadmin + '/' + username).then(function (response) {
                                    $scope.list_hangcandatpurc = response.data;
                                });
                            });
                            $(function () {
                                setTimeout(function () {
                                    window.location.href = "/MuaHang/HangCanDat/DatHang";

                                }, 2000);
                            });
                        }, function errorCallback(response) {
                            ErrorSystem("Không lưu được chi tiết của đơn PO mua hàng");
                        });
                    return;
                }

            }, function errorCallback(response) {
                console.log(response);
                ErrorSystem("Sự cố hệ thống, Không thêm được đơn PO mua hàng, Bạn vui lòng liên hệ với admin để khắc phục");
            });
    };


    $http.post('/api/Api_DonPOMuaHang/ListPOMuaHang/' + isadmin + '/' + username).then(function (response) {
        $scope.list_donPOMUaHang = response.data;
    });

    $scope.chitietPOmuahang = function (masopo) {
        window.location.href = window.location.origin + '/MuaHang/HangCanDat/ChiTietDonDatHang/' + masopo;
    };

    //this gets the full url
    var url = document.location.href;
    //this removes the anchor at the end, if there is one
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    //this removes the query after the file name, if there is one
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    //this removes everything before the last slash in the path
    url = url.substring(url.lastIndexOf("/") + 1, url.length);
    //return


    //hàm tìm kiếm
    $scope.getdatadonPO = function () {
        $http.post(window.location.origin + '/api/Api_DonPOMuaHang/ChiTietPOMuaHang/' + url)
         .then(function (response) {
             if (response.data) {
                 $scope.thongtinmuahang = response.data;
                 $scope.thongtinchung = $scope.thongtinmuahang.ChungPO;
                 $scope.thongtinchitiet = $scope.thongtinmuahang.ChiTietPO;
             }
         }, function (error) {
             console.log(error);
         })
    }
    $scope.getdatadonPO();

    $scope.check123 = function () {
        console.log($scope.thongtinchung.TEN_NHA_CUNG_CAP);
        for (i = 0; i < $scope.thongtinchitiet.length; i++) {
            console.log($scope.thongtinchitiet[i].MA_CHUAN)
        }
    };

    var mangso = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    function dochangchuc(so, daydu) {
        var chuoi = "";
        chuc = Math.floor(so / 10);
        donvi = so % 10;
        if (chuc > 1) {
            chuoi = " " + mangso[chuc] + " mươi";
            if (donvi == 1) {
                chuoi += " mốt";
            }
        } else if (chuc == 1) {
            chuoi = " mười";
            if (donvi == 1) {
                chuoi += " một";
            }
        } else if (daydu && donvi > 0) {
            chuoi = " lẻ";
        }
        if (donvi == 5 && chuc >= 1) {
            chuoi += " lăm";
        } else if (donvi > 1 || (donvi == 1 && chuc == 0)) {
            chuoi += " " + mangso[donvi];
        }
        return chuoi;
    }
    function docblock(so, daydu) {
        var chuoi = "";
        tram = Math.floor(so / 100);
        so = so % 100;
        if (daydu || tram > 0) {
            chuoi = " " + mangso[tram] + " trăm";
            chuoi += dochangchuc(so, true);
        } else {
            chuoi = dochangchuc(so, false);
        }
        return chuoi;
    }
    function dochangtrieu(so, daydu) {
        var chuoi = "";
        trieu = Math.floor(so / 1000000);
        so = so % 1000000;
        if (trieu > 0) {
            chuoi = docblock(trieu, daydu) + " triệu";
            daydu = true;
        }
        nghin = Math.floor(so / 1000);
        so = so % 1000;
        if (nghin > 0) {
            chuoi += docblock(nghin, daydu) + " nghìn";
            daydu = true;
        }
        if (so > 0) {
            chuoi += docblock(so, daydu);
        }
        return chuoi;
    }
    function docso(so) {
        if (so == 0) return mangso[0];
        var chuoi = "", hauto = "";
        do {
            ty = so % 1000000000;
            so = Math.floor(so / 1000000000);
            if (so > 0) {
                chuoi = dochangtrieu(ty, true) + hauto + chuoi;
            } else {
                chuoi = dochangtrieu(ty, false) + hauto + chuoi;
            }
            hauto = " tỷ";
        } while (so > 0);
        return chuoi;
    }
});