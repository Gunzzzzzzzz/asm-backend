<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    posts: { // Đổi tên prop thành 'students' nếu muốn rõ ràng hơn, nhưng giữ 'posts' theo code cũ
        type: Array,
        required: true,
    }
});

// Hàm tính Điểm Trung Bình
const calculateAverage = (student) => {
    // Sẽ là: (Toán + Lý + Hóa) / 3. Làm tròn đến 2 chữ số thập phân.
    const average = (student.Toan + student.Ly + student.Hoa) / 3;
    return average.toFixed(2);
};

// Sử dụng computed để chuẩn bị dữ liệu hiển thị (ví dụ: sắp xếp, lọc, thêm trường TB)
const studentsWithAverage = computed(() => {
    return props.posts.map(student => ({
        ...student,
        DiemTB: calculateAverage(student)
    }));
});
</script>

<template>
    <div class= "rounded p-4 shadow-sm border mt-4 bg-white">

        <h2 class="text-center mb-4">Danh sách Điểm</h2>

        <table class="table table-bordered w-100 mx-auto align-middle">
            <thead class="table-light text-center">
                <tr>
                    <th>STT</th> <th >MSSV</th> <th >Họ Tên</th>
                    <th >Toán</th>
                    <th >Lý</th>
                    <th >Hóa</th>
                    <th >Điểm TB</th> </tr>
            </thead>

            <tbody>
                <tr v-for="(student, index) in studentsWithAverage" :key="index">
                    <td class="text-center">{{ index + 1 }}</td>
                    <td class="text-center">{{ student.MSSV }}</td>
                    <td class="text-center">{{ student.HoTen }}</td>
                    <td class="text-center">{{ student.Toan }}</td>
                    <td class="text-center">{{ student.Ly }}</td>
                    <td class="text-center">{{ student.Hoa }}</td>
                    <td class="text-center fw-bold">{{ student.DiemTB }}</td> </tr>
            </tbody>
        </table>

    </div>
</template>