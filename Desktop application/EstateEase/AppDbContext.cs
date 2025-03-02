using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateEase
{
    public class AppDbContext : DbContext
    {
        public DbSet<Issue> Issues { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlite(@"DataSource=C:\Users\CNN COMPUTERS\Documents\GitHub\GUI\Desktop application\issues.db");
        }

    }
}
