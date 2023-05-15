namespace CheckoutService.Models
{
    public record OrderPayload(string Name, int Quantity = 1);
    public record OrderResult(bool Processed);
    public record InventoryItem(string Name, double PerItemCost, int Quantity);
    public record InventoryRequest(string RequestId, string ItemName, int Quantity);
    public record InventoryResult(bool Success, InventoryItem? OrderPayload, double TotalCost);
    public record PaymentRequest(string RequestId, string Name, double TotalCost);
    public record Notification(string Message);
}