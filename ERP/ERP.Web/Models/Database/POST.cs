
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
    
public partial class POST
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public POST()
    {

        this.POST_CATEGORIES = new HashSet<POST_CATEGORIES>();

    }


    public int MA_BAI_VIET { get; set; }

    public string TIEU_DE_BAI_VIET { get; set; }

    public System.DateTime NGAY_DANG_BAI { get; set; }

    public string NOI_DUNG_BAI_VIET { get; set; }

    public string ANH_BAI_VIET { get; set; }

    public string NGUOI_DANG_BAI { get; set; }

    public Nullable<System.DateTime> NGAY_CAP_NHAT { get; set; }



    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<POST_CATEGORIES> POST_CATEGORIES { get; set; }

}

}
