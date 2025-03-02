using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace EstateEase
{
    /// <summary>
    /// Interaction logic for Fillbox.xaml
    /// </summary>
    public partial class Fillbox : Window
    {
        public event Action IssueSaved;
        
        public string PropertyId
        {
            get { return HouseIDBox.Text; }
            set { HouseIDBox.Text = value; }
        }
        public string Name
        {
            get { return NameBox.Text; }
            set { NameBox.Text = value; }
        }
        public string Date
        {
            get { return DateBox.Text; }
            set { DateBox.Text = value; }
        }
        public string IssueDescription
        {
            get { return IssueBox.Text; }
            set { IssueBox.Text = value; }
        }
        public Fillbox()
        {
            InitializeComponent();
        }
        public void clear()
        {
            HouseIDBox.Clear();
            NameBox.Clear();
            DateBox.Clear();
            IssueBox.Clear();
        }
        private void Clear_issue(object sender, RoutedEventArgs e)
        {
            clear();
        }

        private void Save_Issue(object sender, RoutedEventArgs e)
        {
            using (var context=new AppDbContext())
            {
                var issue = new Issue
                {
                    PropertyId = PropertyId,
                    Name = Name,
                    Date = Date,
                    IssueDescription = IssueDescription
                };
                if (!string.IsNullOrEmpty(PropertyId))
                {
                    var existingIssue = context.Issues.FirstOrDefault(i => i.PropertyId == PropertyId);
                    if (existingIssue != null)
                    {
                        existingIssue.Name = Name;
                        existingIssue.Date = Date;
                        existingIssue.IssueDescription = IssueDescription;
                    }
                    else
                    {
                        context.Issues.Add(issue);
                    }
                }
                context.SaveChanges();
                IssueSaved?.Invoke();
                this.Close();
            }
        }

        private void Cancel_issue(object sender, RoutedEventArgs e)
        {
            this.Close();
        }
    }
}
