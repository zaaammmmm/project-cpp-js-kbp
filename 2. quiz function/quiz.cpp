#include <iostream>
using namespace std;

// Fungsi untuk mengubah angka eksponen menjadi karakter superscript Unicode
string konversiKeSuperscript(int eksponen) {
    string superscript = "";
    string angkaSuperscript[] = {"⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"};

    if (eksponen < 0) {
        superscript += "-";
        eksponen = -eksponen;  
    }

    // Ubah setiap digit eksponen menjadi superscript
    while (eksponen > 0) {
        int digit = eksponen % 10;
        superscript = angkaSuperscript[digit] + superscript;
        eksponen /= 10;
    }

    return superscript;
}
int pangkat(int base, int eksponen) {
    int hasil = 1;
    for (int i = 0; i < eksponen; i++) {
        hasil *= base; 
    }
    return hasil;
}

int main() {
    int base, eksponen;
    cout << "Masukan angka dasar : ";
    cin >> base;
    cout << "Masukkan eksponen: ";
    cin >> eksponen;
    int hasil = pangkat(base, eksponen);

    string eksponenSuperscript = konversiKeSuperscript(abs(eksponen));

    cout << base << eksponenSuperscript << " = " << hasil << endl;

    return 0;
}
// saya mengkonversi eksponen ke karakter superscript agar dapat menghasilkan output berpangkat