﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication1.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class HappyPartyDBModel : DbContext
    {
        public HappyPartyDBModel()
            : base("name=HappyPartyDBModel")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<BillingInfo> BillingInfoes { get; set; }
        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<ContactInfo> ContactInfoes { get; set; }
        public virtual DbSet<DecorationMenu> DecorationMenus { get; set; }
        public virtual DbSet<EntertainmentMenu> EntertainmentMenus { get; set; }
        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<FoodMenu> FoodMenus { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<PaymentInfo> PaymentInfoes { get; set; }
        public virtual DbSet<Request> Requests { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
    }
}
