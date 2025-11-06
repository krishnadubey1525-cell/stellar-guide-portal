import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import UserDetailsForm from "@/components/UserDetailsForm";

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

const KundaliBooking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [step, setStep] = useState<"booking" | "form" | "payment">("booking");
  const [userDetails, setUserDetails] = useState<any>(null);

  const handleSlotSelection = () => {
    if (!date || !selectedSlot) {
      toast({
        title: "Selection Required",
        description: "Please select both date and time slot",
        variant: "destructive",
      });
      return;
    }
    setStep("form");
  };

  const handleFormSubmit = (data: any) => {
    setUserDetails(data);
    setStep("payment");
  };

  const handlePayment = () => {
    toast({
      title: "Processing Payment",
      description: "Redirecting to payment gateway...",
    });
    
    // Simulate payment redirect
    setTimeout(() => {
      window.open("https://buy.stripe.com/test_payment_link", "_blank");
    }, 1500);
  };

  return (
    <section className="py-16 px-4 min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">
            Book Your Personal Kundali Reading
          </h2>
          <p className="text-lg text-muted-foreground">
            Get personalized insights from expert astrologers
          </p>
        </div>

        {step === "booking" && (
          <Card className="border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Select Your Slot</CardTitle>
              <CardDescription>
                Choose a convenient date and time for your consultation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <Label className="text-lg mb-3 block">Select Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border border-border"
                  />
                </div>

                <div className="flex-1">
                  <Label className="text-lg mb-3 block">Select Time Slot</Label>
                  <RadioGroup value={selectedSlot} onValueChange={setSelectedSlot}>
                    <div className="space-y-3">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                        >
                          <RadioGroupItem value={slot} id={slot} />
                          <Label htmlFor={slot} className="cursor-pointer flex-1">
                            {slot}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button
                  onClick={handleSlotSelection}
                  size="lg"
                  className="cosmic-glow"
                >
                  Continue to Details
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "form" && (
          <Card className="border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Fill Your Details</CardTitle>
              <CardDescription>
                Complete the form below with your birth details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-4 rounded-lg mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Selected Slot:</strong> {date?.toLocaleDateString()} at {selectedSlot}
                </p>
              </div>

              <UserDetailsForm 
                onSubmit={handleFormSubmit}
                onBack={() => setStep("booking")}
              />
            </CardContent>
          </Card>
        )}

        {step === "payment" && (
          <Card className="border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Payment</CardTitle>
              <CardDescription>
                Complete your booking with secure payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-12">
                <div className="celestial-glow w-16 h-16 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                  <div className="text-3xl">₹</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Booking Amount: ₹999</h3>
                <p className="text-muted-foreground mb-8">
                  Secure payment powered by Stripe
                </p>
                <Button
                  onClick={() => window.open("https://buy.stripe.com/test_payment_link", "_blank")}
                  size="lg"
                  className="cosmic-glow"
                >
                  Pay Now
                </Button>
              </div>

              <div className="border-t border-border pt-4">
                <Button
                  onClick={() => setStep("form")}
                  variant="outline"
                  className="w-full"
                >
                  Back to Form
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default KundaliBooking;
