"use client";

import Modal from "@/app/_component/modal/Modal";
import useLockHtmlScroll from "@/hooks/useLockHtmlScroll";
import SignUpBody from "./SignUpBody";

export default function SignUpModal() {
  useLockHtmlScroll(true);

  return (
    <Modal>
      <SignUpBody />
    </Modal>
  );
}
