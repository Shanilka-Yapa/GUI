﻿using System;
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
    /// Interaction logic for Dashboard.xaml
    /// </summary>
    public partial class Dashboard : Window
    {
        public Dashboard()
        {
            InitializeComponent();
        }
        private void Show_TotalProperties(object sender, RoutedEventArgs e)
        {
            int totalProperties = 10;
            TotalPropertiesText.Text = "Total Properties: " + totalProperties;
        }
        private void Show_TotalTenants(object sender, RoutedEventArgs e)
        {
            int totalTenants = 25;
            TotalTenantsText.Text = "Total Tenants: " + totalTenants;
        }
        private void Show_Contacts(object sender, RoutedEventArgs e)
        {
            ContactsText.Text = "Email  :estateease@gmail.com\nContacts :0712345678";
        }
        private void Back_Button(object sender, RoutedEventArgs e)
        {
            Welcome welcomewindow = new Welcome();
            welcomewindow.Show();
            this.Close();
        }


    }
}
