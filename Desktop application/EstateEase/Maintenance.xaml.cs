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
    /// Interaction logic for Maintenance.xaml
    /// </summary>
    public partial class Maintenance : Window
    {
        

        public Maintenance()
        {
            InitializeComponent();
            RefreshDataGrid();
        }
        
        private void Add_Maintenance(object sender, RoutedEventArgs e)
        {
            
            Fillbox fillboxwindow = new Fillbox();

            fillboxwindow.IssueSaved += RefreshDataGrid;
            fillboxwindow.ShowDialog();
        }

        private void Update_Maintenance(object sender, RoutedEventArgs e)
        {
            
           var selectedIssue = InfoGrid.SelectedItem as Issue;
            if (selectedIssue != null)
            {
                Fillbox fillboxwindow = new Fillbox
                {
                    PropertyId = selectedIssue.PropertyId,
                    Name = selectedIssue.Name,
                    Date = selectedIssue.Date,
                    IssueDescription = selectedIssue.IssueDescription
                };
                fillboxwindow.IssueSaved += RefreshDataGrid;
                fillboxwindow.ShowDialog();
            }
            else
            {
                MessageBox.Show("Please select an issue to update");
            }
        }

        private void Delete_Maintenance(object sender, RoutedEventArgs e)
        {
            var selectedIssue = InfoGrid.SelectedItem as Issue;
            if (selectedIssue != null)
            {
                var result = MessageBox.Show("Are you sure you want to delete this issue?","Confirm Delete",MessageBoxButton.YesNo);
                if (result == MessageBoxResult.Yes)
                {
                    using (var context=new AppDbContext())
                    {
                        var issueToDelete=context.Issues.FirstOrDefault(i => i.Id == selectedIssue.Id);
                        if (issueToDelete != null)
                        {
                            context.Issues.Remove(issueToDelete);
                            context.SaveChanges();
                            RefreshDataGrid();
                        }
                    }
                }
            }
            else
            {
                MessageBox.Show("Please select an issue to delete");
            }
        }
        private void RefreshDataGrid()
        {
            using (var context = new AppDbContext())
            {
                var issue = context.Issues.ToList();
                InfoGrid.ItemsSource = issue;
            }
        }

        private void Back_Button(object sender, RoutedEventArgs e)
        {
            Welcome welcomewindow = new Welcome();
            welcomewindow.Show();
            this.Close();
        }
    }
}
