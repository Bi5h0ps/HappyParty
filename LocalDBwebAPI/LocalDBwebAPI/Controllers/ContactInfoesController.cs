using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using LocalDBwebAPI.Models;

namespace LocalDBwebAPI.Controllers
{
    public class ContactInfoesController : ApiController
    {
        private HappyPartyProjectEntities db = new HappyPartyProjectEntities();

        // GET: api/ContactInfoes
        public IQueryable<ContactInfo> GetContactInfoes()
        {
            return db.ContactInfoes;
        }

        // GET: api/ContactInfoes/5
        [ResponseType(typeof(ContactInfo))]
        public IHttpActionResult GetContactInfo(int id)
        {
            ContactInfo contactInfo = db.ContactInfoes.Find(id);
            if (contactInfo == null)
            {
                return NotFound();
            }

            return Ok(contactInfo);
        }

        // PUT: api/ContactInfoes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContactInfo(int id, ContactInfo contactInfo)
        {
            if (id != contactInfo.ClientId)
            {
                return BadRequest();
            }

            db.Entry(contactInfo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ContactInfoes
        [ResponseType(typeof(ContactInfo))]
        public IHttpActionResult PostContactInfo(ContactInfo contactInfo)
        {
            db.ContactInfoes.Add(contactInfo);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ContactInfoExists(contactInfo.ClientId))
                {
                    return PutContactInfo(contactInfo.ClientId, contactInfo);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = contactInfo.ClientId }, contactInfo);
        }

        // DELETE: api/ContactInfoes/5
        [ResponseType(typeof(ContactInfo))]
        public IHttpActionResult DeleteContactInfo(int id)
        {
            ContactInfo contactInfo = db.ContactInfoes.Find(id);
            if (contactInfo == null)
            {
                return NotFound();
            }

            db.ContactInfoes.Remove(contactInfo);
            db.SaveChanges();

            return Ok(contactInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactInfoExists(int id)
        {
            return db.ContactInfoes.Count(e => e.ClientId == id) > 0;
        }
    }
}