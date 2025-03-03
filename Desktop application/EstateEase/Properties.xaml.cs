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
            houses.Add(new House { ID = 1, Address = "123 Main St", Price = "$250,000", ImagePath = @"Images/House1.jpg" });
            houses.Add(new House { ID = 2, Address = "456 Oak Ave", Price = "$320,000", ImagePath = @"Images/House2.jpg" });
            houses.Add(new House { ID = 3, Address = "789 Pine Rd", Price = "$400,000", ImagePath = @"Images/House3.jpg" });
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
    }
}
