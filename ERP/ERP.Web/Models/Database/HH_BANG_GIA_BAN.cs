
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
    
public partial class HH_BANG_GIA_BAN
{

    public int ID { get; set; }

    public Nullable<System.DateTime> NGAY_CAP_NHAT { get; set; }

    public string MA_HANG { get; set; }

    public string MA_NHOM_HANG { get; set; }

    public string SERIES { get; set; }

    public decimal CK_SP_1 { get; set; }

    public decimal GIA_SP_1 { get; set; }

    public decimal CK_SP_2 { get; set; }

    public decimal GIA_SP_2 { get; set; }

    public decimal CK_SP_3 { get; set; }

    public decimal GIA_SP_3 { get; set; }

    public decimal SL_MOQ_1 { get; set; }

    public decimal CK_MOQ_1 { get; set; }

    public decimal GIA_MOQ_1 { get; set; }

    public decimal SL_MOQ_2 { get; set; }

    public decimal CK_MOQ_2 { get; set; }

    public decimal GIA_MOQ_2 { get; set; }

    public decimal SL_MOQ_3 { get; set; }

    public decimal CK_MOQ_3 { get; set; }

    public decimal CK_LIST_NCC1_1 { get; set; }

    public decimal GIA_LIST_NCC1_1 { get; set; }

    public decimal CK_LIST_NCC1_2 { get; set; }

    public decimal GIA_LIST_NCC1_2 { get; set; }

    public decimal CK_LIST_NCC1_3 { get; set; }

    public decimal GIA_LIST_NCC1_3 { get; set; }

    public decimal CK_LIST_NCC2_1 { get; set; }

    public decimal GIA_LIST_NCC2_1 { get; set; }

    public decimal CK_LIST_NCC2_2 { get; set; }

    public decimal GIA_LIST_NCC2_2 { get; set; }

    public decimal CK_LIST_NCC2_3 { get; set; }

    public decimal GIA_LIST_NCC2_3 { get; set; }

    public decimal CK_LIST_NCC3_1 { get; set; }

    public decimal GIA_LIST_NCC3_1 { get; set; }

    public decimal CK_LIST_NCC3_2 { get; set; }

    public decimal GIA_LIST_NCC3_2 { get; set; }

    public decimal CK_LIST_NCC3_3 { get; set; }

    public decimal GIA_LIST_NCC3_3 { get; set; }

    public decimal CK_LIST_NCC4_1 { get; set; }

    public decimal GIA_LIST_NCC4_1 { get; set; }

    public decimal CK_LIST_NCC4_2 { get; set; }

    public decimal GIA_LIST_NCC4_2 { get; set; }

    public decimal CK_LIST_NCC4_3 { get; set; }

    public decimal GIA_LIST_NCC4_3 { get; set; }

    public string GHI_CHU { get; set; }

    public decimal GIA_MOQ_3 { get; set; }

    public decimal CK_SERIES_1 { get; set; }

    public decimal CK_SERIES_2 { get; set; }

    public decimal CK_SERIES_3 { get; set; }

    public decimal GIA_SERIES_1 { get; set; }

    public decimal GIA_SERIES_2 { get; set; }

    public decimal GIA_SERIES_3 { get; set; }



    public virtual HH HH { get; set; }

    public virtual HH_NHOM_VTHH HH_NHOM_VTHH { get; set; }

    public virtual HH_NHOM_VTHH HH_NHOM_VTHH1 { get; set; }

}

}
