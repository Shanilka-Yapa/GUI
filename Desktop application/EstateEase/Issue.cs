using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EstateEase
{
    public class Issue
    {
        
        public int Id { get; set; }
        public string PropertyId { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
        public string IssueDescription { get; set; }
    }
}
