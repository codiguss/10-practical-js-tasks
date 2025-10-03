const couponLengthInput = document.getElementById('coupon-length-input');
    const generateCouponBtn = document.getElementById('generate-coupon-btn');
    const couponResult = document.getElementById('coupon-result');

    generateCouponBtn.addEventListener('click', () => {
        const length = parseInt(couponLengthInput.value);
        if (isNaN(length) || length <= 0) {
            couponResult.textContent = 'Tamanho inválido';
            return;
        }
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let coupon = '';
        for (let i = 0; i < length; i++) {
            coupon += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        couponResult.textContent = coupon;
    });