
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace ERP.Web.Models.Database
{

using System;
    using System.Collections.Generic;
    
public partial class KHO_CT_DNXH
{

    public int ID { get; set; }

    public string SO_DN { get; set; }

    public string MA_HANG { get; set; }

    public int SO_LUONG { get; set; }

    public decimal DON_GIA { get; set; }

    public double CHIET_KHAU { get; set; }

    public decimal THANH_TIEN { get; set; }

    public Nullable<System.DateTime> NGAY_XUAT { get; set; }

    public string DIA_DIEM_GIAO_HANG { get; set; }

    public int SL_GIU { get; set; }

    public int SL_CHUA_GIU { get; set; }

    public int SL_DA_XUAT { get; set; }

    public int SL_CHUA_XUAT { get; set; }

    public string PHUONG_THUC_VAN_CHUYEN { get; set; }

    public string GHI_CHU { get; set; }



    public virtual HH HH { get; set; }

    public virtual KHO_DNXH KHO_DNXH { get; set; }

}

}
