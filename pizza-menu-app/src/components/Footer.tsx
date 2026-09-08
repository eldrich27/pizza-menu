export function Footer() {
    const currentHour: number = new Date().getHours();
    const isOpen: boolean = currentHour >= 11 && currentHour < 23; // Open from 11 AM to 11 PM

    return (
        <footer className="footer">
            <p>&copy; 2023 Pizza Paradise. All rights reserved.</p>
            {isOpen && <p>Open now!</p>}
        </footer>
    );
}