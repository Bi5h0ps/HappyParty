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
    public class BillingInfoesController : ApiController
    {
        private HappyPartyProjectEntities db = new HappyPartyProjectEntities();

        // GET: api/BillingInfoes
        public IQueryable<BillingInfo> GetBillingInfoes()
        {
            return db.BillingInfoes;
        }

        // GET: api/BillingInfoes/5
        [ResponseType(typeof(BillingInfo))]
        public IHttpActionResult GetBillingInfo(int id)
        {
            BillingInfo billingInfo = db.BillingInfoes.Find(id);
            if (billingInfo == null)
            {
                return NotFound();
            }

            return Ok(billingInfo);
        }

        // PUT: api/BillingInfoes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBillingInfo(int id, BillingInfo billingInfo)
        {

            if (id != billingInfo.ClientId)
            {
                return BadRequest();
            }

            db.Entry(billingInfo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillingInfoExists(id))
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

        // POST: api/BillingInfoes
        [ResponseType(typeof(BillingInfo))]
        public IHttpActionResult PostBillingInfo(BillingInfo billingInfo)
        {
            db.BillingInfoes.Add(billingInfo);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (BillingInfoExists(billingInfo.ClientId))
                {
                    return PutBillingInfo(billingInfo.ClientId, billingInfo);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = billingInfo.ClientId }, billingInfo);
        }

        // DELETE: api/BillingInfoes/5
        [ResponseType(typeof(BillingInfo))]
        public IHttpActionResult DeleteBillingInfo(int id)
        {
            BillingInfo billingInfo = db.BillingInfoes.Find(id);
            if (billingInfo == null)
            {
                return NotFound();
            }

            db.BillingInfoes.Remove(billingInfo);
            db.SaveChanges();

            return Ok(billingInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BillingInfoExists(int id)
        {
            return db.BillingInfoes.Count(e => e.ClientId == id) > 0;
        }
    }
}