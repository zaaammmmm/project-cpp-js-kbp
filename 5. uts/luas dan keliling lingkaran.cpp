#include <iostream>
#include <cmath>

const double PI = 3.14159;

double hitungLuas(double jariJari) {
    return PI * pow(jariJari, 2);
}

double hitungKeliling(double jariJari) {
    return 2 * PI * jariJari;
}

int main() {
    while (true) {
        int pilihan;
        double jariJari;

        std::cout << "=== Program Hitung Lingkaran ===" << std::endl;
        std::cout << "1. Hitung Luas Lingkaran" << std::endl;
        std::cout << "2. Hitung Keliling Lingkaran" << std::endl;
        std::cout << "3. Keluar" << std::endl;
        std::cout << "Pilih menu: ";
        std::cin >> pilihan;

        if (pilihan == 1 || pilihan == 2) {
            std::cout << "Masukkan nilai jari-jari: ";
            std::cin >> jariJari;
        }

        if (pilihan == 3) {
            std::cout << "Program selesai." << std::endl;
            break;
        }

        switch (pilihan) {
            case 1:
                std::cout << "Luas lingkaran: " << hitungLuas(jariJari) << std::endl;
                break;
            case 2:
                std::cout << "Keliling lingkaran: " << hitungKeliling(jariJari) << std::endl;
                break;
            default:
                std::cout << "Pilihan tidak valid!" << std::endl;
                break;
        }

        std::cout << std::endl;
    }

    return 0;
}
