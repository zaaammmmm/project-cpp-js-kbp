#include <iostream>
#include <cmath> // Menambahkan library cmath untuk fungsi pow()

using namespace std;

int main() {
    int choice, numCount;
    double result, num;

    while (true) {
        cout << "KALKULATOR SEDERHANA" << endl;
        cout << "1. Penjumlahan" << endl;
        cout << "2. Pengurangan" << endl;
        cout << "3. Perkalian" << endl;
        cout << "4. Pembagian" << endl;
        cout << "5. Perpangkatan" << endl; // Opsi perpangkatan
        cout << "6. Keluar" << endl;
        cout << "Anda ingin melakukan apa?: ";
        cin >> choice;

        if (choice == 6) { // Keluar jika pilihan 6
            break;
        }

        if (choice < 1 || choice > 6) {
            cout << "Pilihan tidak valid. Silakan coba lagi." << endl;
            continue;
        }

        cout << "Berapa banyak angka yang ingin dihitung?: ";
        cin >> numCount;

        if (numCount < 2) {
            cout << "Harus menghitung setidaknya dua angka." << endl;
            continue;
        }

        cout << "Masukkan angka pertama: ";
        cin >> result;

        for (int i = 1; i < numCount; ++i) {
            cout << "Masukkan angka ke-" << i + 1 << ": ";
            cin >> num;

            switch (choice) {
                case 1: // Penjumlahan
                    result += num;
                    break;
                case 2: // Pengurangan
                    result -= num;
                    break;
                case 3: // Perkalian
                    result *= num;
                    break;
                case 4: // Pembagian
                    if (num != 0) {
                        result /= num;
                    } else {
                        cout << "Error! Pembagian dengan nol tidak diperbolehkan." << endl;
                        i = numCount;
                    }
                    break;
                case 5: // Perpangkatan
                    result = pow(result, num); // Menggunakan fungsi pow() dari cmath
                    break;
            }
        }

        if ((choice != 4) || num != 0) {
            cout << "Hasil: " << result << endl;
        }
    }

    return 0;
}
