
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
    
public partial class HT_CONG_VIEC_NHAN_VIEN
{

    public int ID { get; set; }

    public System.DateTime NGAY_CAP_NHAT { get; set; }

    public string USERNAME { get; set; }

    public string NGUOI_CAP_NHAT { get; set; }

    public string NHIEM_VU_CHI_TIET { get; set; }

    public string MUC_TIEU_CONG_VIEC { get; set; }



    public virtual HT_NGUOI_DUNG HT_NGUOI_DUNG { get; set; }

    public virtual HT_NGUOI_DUNG HT_NGUOI_DUNG1 { get; set; }

}

}
