
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
    
public partial class NCC_TK_NGAN_HANG
{

    public int ID { get; set; }

    public string SO_TAI_KHOAN { get; set; }

    public string MA_NHA_CUNG_CAP { get; set; }

    public string TEN_TAI_KHOAN { get; set; }

    public string TEN_NGAN_HANG { get; set; }

    public string CHI_NHANH { get; set; }

    public string TINH_TP { get; set; }

    public string GHI_CHU { get; set; }

    public string LOAI_TAI_KHOAN { get; set; }



    public virtual DM_LOAI_TK_NGAN_HANG DM_LOAI_TK_NGAN_HANG { get; set; }

    public virtual NCC NCC { get; set; }

}

}
