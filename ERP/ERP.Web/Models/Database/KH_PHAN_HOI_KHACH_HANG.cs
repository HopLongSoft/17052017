
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
    
public partial class KH_PHAN_HOI_KHACH_HANG
{

    public int ID { get; set; }

    public string MA_KHACH_HANG { get; set; }

    public string NGUOI_PHAN_HOI { get; set; }

    public System.DateTime NGAY_PHAN_HOI { get; set; }

    public string THONG_TIN_PHAN_HOI { get; set; }



    public virtual CCTC_NHAN_VIEN CCTC_NHAN_VIEN { get; set; }

    public virtual KH KH { get; set; }

}

}
