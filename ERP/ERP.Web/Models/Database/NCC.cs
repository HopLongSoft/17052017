
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
    
public partial class NCC
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public NCC()
    {

        this.MH_PO_MUA_HANG = new HashSet<MH_PO_MUA_HANG>();

        this.MH_XL_YEU_CAU_HOI_GIA = new HashSet<MH_XL_YEU_CAU_HOI_GIA>();

        this.NCC_LIEN_HE = new HashSet<NCC_LIEN_HE>();

        this.NCC_LOAI_HANG_CUNG_CAP = new HashSet<NCC_LOAI_HANG_CUNG_CAP>();

        this.NCC_TK_NGAN_HANG = new HashSet<NCC_TK_NGAN_HANG>();

        this.QUY_CT_PHIEU_CHI = new HashSet<QUY_CT_PHIEU_CHI>();

    }


    public string MA_NHA_CUNG_CAP { get; set; }

    public string TEN_NHA_CUNG_CAP { get; set; }

    public string PHAN_LOAI_NCC { get; set; }

    public string VAN_PHONG_GIAO_DICH { get; set; }

    public string DIA_CHI_XUAT_HOA_DON { get; set; }

    public string MST { get; set; }

    public string SDT { get; set; }

    public string EMAIL { get; set; }

    public string FAX { get; set; }

    public string WEBSITE { get; set; }

    public string DIEU_KHOAN_THANH_TOAN { get; set; }

    public Nullable<int> SO_NGAY_DUOC_NO { get; set; }

    public Nullable<int> SO_NO_TOI_DA { get; set; }

    public string DANH_GIA { get; set; }

    public string GHI_CHU { get; set; }

    public string LOGO { get; set; }

    public string TRUC_THUOC { get; set; }



    public virtual CCTC_CONG_TY CCTC_CONG_TY { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<MH_PO_MUA_HANG> MH_PO_MUA_HANG { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<MH_XL_YEU_CAU_HOI_GIA> MH_XL_YEU_CAU_HOI_GIA { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<NCC_LIEN_HE> NCC_LIEN_HE { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<NCC_LOAI_HANG_CUNG_CAP> NCC_LOAI_HANG_CUNG_CAP { get; set; }

    public virtual NCC_LOAI NCC_LOAI { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<NCC_TK_NGAN_HANG> NCC_TK_NGAN_HANG { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<QUY_CT_PHIEU_CHI> QUY_CT_PHIEU_CHI { get; set; }

}

}
