using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Media.Imaging;

namespace EstateEase
{
    public partial class Properties : Window
    {
        private List<House> houses = new List<House>();  // List to store house details
        private int currentIndex = 0;  // Tracks current house index

        public Properties()
        {
            InitializeComponent();
            LoadHouses();  // Load house data
            UpdateHouseDisplay();  // Show first house
        }

        // Load house details into the list
        private void LoadHouses()
        {
            houses.Add(new House { ID = 001, Address = "123 Main St,Colombo", Price = "RS 200 Lakhs", ImagePath = @"Images/House1.jpg" });
            houses.Add(new House { ID = 002, Address = "456 Oak Ave,Maharagama", Price = "RS 250 Lakshs", ImagePath = @"Images/House2.jpg" });
            houses.Add(new House { ID = 003, Address = "789 Pine Rd,Colombo", Price = "RS 150 Lakhs", ImagePath = @"Images/House3.jpg" });
            houses.Add(new House { ID = 004, Address = "101 Armstrong road, Kadawatha", Price = "RS 125 Lakhs", ImagePath = @"Images/House4.jpg" });
            houses.Add(new House { ID = 005, Address = "2020 5th Avenue, Kaduwela", Price = "RS 500 Lakhs", ImagePath = @"Images/House5.jpg" });
        }

        // Update UI to display the current house
        private void UpdateHouseDisplay()
        {
            if (houses.Count > 0)
            {
                House currentHouse = houses[currentIndex];

                // Load image
                HouseImage.Source = new BitmapImage(new Uri(currentHouse.ImagePath, UriKind.Relative));

                // Update text fields
                HouseIDText.Text = $"ID: {currentHouse.ID}";
                HouseAddressText.Text = $"Address: {currentHouse.Address}";
                HousePriceText.Text = $"Price: {currentHouse.Price}";
            }
        }

        // Left Button Click (Previous House)
        private void Prev_House(object sender, RoutedEventArgs e)
        {
            if (houses.Count > 0)
            {
                currentIndex = (currentIndex - 1 + houses.Count) % houses.Count;
                UpdateHouseDisplay();
            }
        }

        // Right Button Click (Next House)
        private void Next_House(object sender, RoutedEventArgs e)
        {
            if (houses.Count > 0)
            {
                currentIndex = (currentIndex + 1) % houses.Count;
                UpdateHouseDisplay();
            }
        }

        private void Back_Button(object sender, RoutedEventArgs e)
        {
            Welcome welcomewindow = new Welcome();
            welcomewindow.Show();
            this.Close();
        }

        private void Request_Button(object sender, RoutedEventArgs e)
        {
            MessageBoxResult result = MessageBox.Show("Do you want to request more information?", "Confirm Request", MessageBoxButton.YesNo, MessageBoxImage.Question);

            if (result == MessageBoxResult.Yes)
            {
                MessageBox.Show("Information will be sent to your email.", "Request Received", MessageBoxButton.OK, MessageBoxImage.Information);
            }
        }
    }
}
