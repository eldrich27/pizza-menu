export function Footer() {
    const currentHour: number = new Date().getHours();
    const isOpen: boolean = currentHour >= 6 && currentHour < 23; // Open from 10 AM to 11 PM

    return (
        <footer className="footer">
            <p>&copy; 2023 Pizza Paradise. All rights reserved.</p>
            {isOpen && (
                <button className="btn">Order Now</button>
            )}
        </footer>
    );
}