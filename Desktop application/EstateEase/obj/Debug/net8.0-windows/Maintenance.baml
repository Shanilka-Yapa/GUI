   M S B A M L   `   `   `  ����E  AEstateEase, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null'clr-namespace:EstateEase
EstateEase  5   	       EstateEase.Maintenance   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   *localclr-namespace:EstateEase     5   	     � Title$  Maintenance��5   	   $	��450��6   $	��800��6*   .��5	      � 
���   � � RowDefinitions 5   
   �� 5      $��1* �6   �� 5      $��6* �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��3* �6   �� 5      $��* �6   .+�5   
   �� $��UniformToFill=�5       J� Opacity$
  0.2Q�5      $��2��5      $��3��5      $!��Images/maintenanceimage.jpg��5      �� 5   
   $��0��6   $��0��5      $��2��5      $��Center=�5       $
��Bold"�5!      $��25(�5"      $��Maintenance��5#      
����ح�$
��0 10q�5%      �� 5'   
   $��1��6   $��1��6"   $��Center=�5(      .+�5)      �� -   5           RoundButtonStyle#��[  5)      $��50��5*      $��20(�5+      $��5q�5,      $��5q�5-      
���   �$	��170��5/      
�������
����ح�$
��Bold"�52      .��54      Add6   �� 55      -   5        #��[  55      $��50��56      $	��170��57      $��20(�58      $��5q�59      $��5q�5:      
���   �
�������
����ح�$
��Bold"�5>      .��5?   0   Update68   �� 5@      -   5        #��[  5@      $��50��5A      $	��170��5B      $��20(�5C      $��5q�5D      $��5q�5E      
���   �
����ح�
�������$
��Bold"�5I      .��5J   0   Delete68   �� 5K      -   5        #��[  5K      $��50��5L      $	��170��5M      $��20(�5N      $��5q�5O      $��5q�5P      
���   �
����ح�
�������$
��Bold"�5T      .��5U   )   Back6/   5V      &   System.Windows.Controls.DataGrid  5W   
   -   5          Name$ InfoGrid��5[      $��1��5W      
�������
���   �$��0��5Z         AutoGenerateColumns$
 True��5\      $��10q�5]      $��Stretch=�5^      $��Stretch=�5_      5a      5c      