import Swal from "sweetalert2";

export const Dialog = {
    confirm: (callback?: () => void) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reset it!'
        }).then((result) => {
            if (result.isConfirmed) {
                callback?.();
                Swal.fire(
                    'Reset!',
                    'Your form has been reset.',
                    'success'
                )
            }
        })
    },
    alert: (message?: string) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message ?? 'Something went wrong!',
        })
    },
    success: (callback?: () => void) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your form has been submitted!',
        }).then(() => callback?.());
    }
}