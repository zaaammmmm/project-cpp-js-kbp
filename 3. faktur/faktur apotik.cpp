#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
    // Informasi apotek
    string nama_apotek = "APOTEK SOLIDARITY FOREVER";
    string no_surat_izin = "503/00686/DPM-PTSP/kes/XII/2018";
    string lokasi = "Sleman, Condong Catur";
    string telp = "085649609665";
    string email = "apoteksolfer@gmail.com";

    // Informasi faktur
    cout << "==============================================================" << endl;
    cout << "                       " << nama_apotek << "                        " << endl;
    cout << "==============================================================" << endl;
    cout << "No. Surat Izin Apotek : " << no_surat_izin << endl;
    cout << lokasi << endl;
    cout << "Telp. " << telp << ", Email: " << email << endl;
    cout << "==============================================================" << endl;

    string nama_pelanggan = "Ahmad Zamroni Trikarta";
    string no_telp = "085649609665";
    string alamat = "Jl. Cemara no.4, Condong Catur, Kab Sleman";
    string kasir = "Keysia Efelin Bungalan";
    string tanggal = "07 October 2021 10:55:02";
    string no_faktur = "PJ2110070001";
    string pembayaran = "TUNAI";

    // Data barang
    string barang[][6] = {
        {"Bodrex Flu", "2", "Ampul", "- (ED 2021-05-10)", "1000", "0%"},
        {"VITAMIN C 50 MG KF 10 TABLET", "3", "Strip", "J80163B1 (ED 2021-09-30)", "2500", "0%"},
        {"Paracetamol Ekstra 20mg", "5", "Pcs", "A1 (ED 2022-04-07)", "12000", "0%"}
    };
    int jumlah_barang = 3;
    int subtotal[] = {2000, 7500, 60000};

    // Menghitung subtotal
    int total = 0;
    for (int i = 0; i < jumlah_barang; i++) {
        total += subtotal[i];
    }
    double pajak = total * 0.1;
    double grand_total = total + pajak;

    // Menampilkan faktur
    cout << "Nama Pelanggan : " << nama_pelanggan << endl;
    cout << "No. Telp : " << no_telp << endl;
    cout << "Alamat : " << alamat << endl;
    cout << "Kasir : " << kasir << endl;
    cout << "Tanggal : " << tanggal << endl;
    cout << "No. Faktur : " << no_faktur << endl;
    cout << "Pembayaran : " << pembayaran << endl;
    cout << "-----------------------------------------------------------------------------------------------" << endl;
    cout << left << setw(5) << "No"
         << setw(30) << "Nama Barang"
         << setw(5) << "Qty"
         << setw(10) << "Satuan"
         << setw(25) << "Batch & ED"
         << setw(10) << "Harga"
         << setw(10) << "Disk"
         << setw(10) << "Subtotal" << endl;
    cout << "-----------------------------------------------------------------------------------------------" << endl;
    for (int i = 0; i < jumlah_barang; i++) {
        cout << left << setw(5) << i + 1
             << setw(30) << barang[i][0]
             << setw(5) << barang[i][1]
             << setw(10) << barang[i][2]
             << setw(25) << barang[i][3]
             << setw(10) << barang[i][4]
             << setw(10) << barang[i][5]
             << setw(10) << subtotal[i] << endl;
    }
    cout << "-----------------------------------------------------------------------------------------------" << endl;
    cout << "Total : " << total << endl;
    cout << "Diskon : 0" << endl;
    cout << "Pajak : " << fixed << setprecision(2) << pajak << endl;
    cout << "Grand Total : " << grand_total << endl;
    cout << "==============================================================" << endl;

    // Catatan
    cout << "Catatan: Terima kasih telah berkunjung. Semoga sehat selalu." << endl;
    cout << "Maaf, barang yang sudah dibeli tidak dapat ditukar atau dikembalikan." << endl;
    cout << "==============================================================" << endl;

    // Tanda tangan
    cout << "Penerima / Pembeli                          APOTEK Demo" << endl;
    cout << endl;
    cout << "-------------------                        ---------------" << endl;
    cout << "(Tanda Tangan)                            (Tanda Tangan)" << endl;

    return 0;
}
