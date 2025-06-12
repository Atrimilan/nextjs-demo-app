"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
    const router = useRouter(); // Imported from "next/navigation" and NOT from "next/router" !

    return (
        <div className="modal-backdrop" onClick={router.back} />
    );
}