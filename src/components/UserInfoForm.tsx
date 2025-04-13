
import { useState } from "react";

interface UserInfoFormProps {
  onSubmit: (formData: { name: string; gender: string }) => void;
}

export function UserInfoForm({ onSubmit }: UserInfoFormProps) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, gender });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-studio-purple focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
          Gender
        </label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-studio-purple focus:border-transparent"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="other">Prefer not to say</option>
        </select>
      </div>
    </form>
  );
}
