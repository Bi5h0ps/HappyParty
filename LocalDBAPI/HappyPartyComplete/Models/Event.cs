//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HappyPartyComplete.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Event
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Event()
        {
            this.DecorationMenus = new HashSet<DecorationMenu>();
            this.EntertainmentMenus = new HashSet<EntertainmentMenu>();
            this.FoodMenus = new HashSet<FoodMenu>();
        }
    
        public int EventId { get; set; }
        public string LocationId { get; set; }
        public Nullable<System.DateTime> EventDate { get; set; }
        public Nullable<int> InviteeNum { get; set; }
        public Nullable<decimal> budget { get; set; }
    
        public virtual Location Location { get; set; }
        public virtual Request Request { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DecorationMenu> DecorationMenus { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EntertainmentMenu> EntertainmentMenus { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FoodMenu> FoodMenus { get; set; }
    }
}