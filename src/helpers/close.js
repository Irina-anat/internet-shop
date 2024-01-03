function onClose(e) {
    if (e.code === "Escape") {
        this.close()
    }
}

export { onClose };