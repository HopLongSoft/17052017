
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
    
public partial class KT_SO_NHAT_KY_CHUNG
{

    public int ID { get; set; }

    public System.DateTime NGAY_HACH_TOAN { get; set; }

    public System.DateTime NGAY_CHUNG_TU { get; set; }

    public string SO_CHUNG_TU { get; set; }

    public string DOI_TUONG { get; set; }

    public string TRUC_THUOC { get; set; }

    public string DIEN_GIAI_CHUNG { get; set; }

    public string DIEN_GIAI_CHI_TIET { get; set; }

    public string TAI_KHOAN_HACH_TOAN { get; set; }

    public string TAI_KHOAN_DOI_UNG { get; set; }

    public decimal PHAT_SINH_NO { get; set; }

    public decimal PHAT_SINH_CO { get; set; }



    public virtual CCTC_CONG_TY CCTC_CONG_TY { get; set; }

    public virtual DM_TAI_KHOAN_HACH_TOAN DM_TAI_KHOAN_HACH_TOAN { get; set; }

    public virtual DM_TAI_KHOAN_HACH_TOAN DM_TAI_KHOAN_HACH_TOAN1 { get; set; }

}

}