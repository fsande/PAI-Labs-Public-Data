/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F de Sande
 * @since Mar 14, 2025
 * @description Program to manage different kinds of Notification Services
 *              The design violates one of the SOLID principles.
 * 
 */

/** @description Represents a Notification system **/
class NotificationService {
  public sendNotification(notificationType: string, message: string): void {
    switch(notificationType) {
      case 'email':
        console.log(`Sending email notification: ${message}`);
        break;
      case 'sms':
        console.log(`Sending SMS notification: ${message}`);
        break;
      case 'push':
        console.log(`Sending push notification: ${message}`);
        break;
      default:
        throw new Error('Unsupported notification type');
        break;
    }
  }
}

export function main(): void { 
  const notificationService = new NotificationService();
  notificationService.sendNotification('email', 'Hello via Email!');
  notificationService.sendNotification('sms', 'Hello via SMS!');
  notificationService.sendNotification('push', 'Hello via Push!');
}

main();
